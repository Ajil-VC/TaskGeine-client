import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Dialog } from '@angular/cdk/dialog';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink, LogoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  authService = inject(AuthService);
  private dialog = inject(Dialog);

  @ViewChild('header') header!: TemplateRef<unknown>;
  @ViewChild('body') body!: TemplateRef<unknown>;
  @ViewChild('footer') footer!: TemplateRef<unknown>;

  otp: string = '';
  otpIsSubmitting: boolean = false;
  @ViewChildren('otpInput')
  otpInputs!: QueryList<ElementRef<HTMLInputElement>>;


  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isSubmitting: boolean = false;

  protected openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      disableClose: true,
      data: {
        header: this.header,
        body: this.body,
        footer: this.footer
      }
    });

    return dialogRef.closed;
  }

  get passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  get canSubmit(): boolean {
    return (
      !!this.name.trim() &&
      !!this.email.trim() &&
      !!this.password.trim() &&
      !!this.confirmPassword.trim() &&
      this.passwordsMatch &&
      !this.isSubmitting
    );
  }

  register(): void {
    if (!this.canSubmit) {
      return;
    }

    this.isSubmitting = true;

    this.authService.register(this.name, this.email, this.password)
      .pipe(
        switchMap(() => this.openModal())
      ).subscribe({
        next: (res) => {

        },
        error: (err) => {

        }
      })
  }



  get canSubmitOTP(): boolean {
    return (
      !!this.otp.trim() &&
      (this.otp.length === 6) &&
      !this.otpIsSubmitting
    );
  }
  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;

    // Allow only digits
    const value = input.value.replace(/\D/g, '');

    input.value = value;

    const otpArray = this.otp.padEnd(6).split('');
    otpArray[index] = value;

    this.otp = otpArray.join('').trim();

    if (value && index < 5) {
      this.otpInputs.get(index + 1)?.nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {

    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.otpInputs.get(index - 1)?.nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {

    event.preventDefault();

    const pasted = event.clipboardData
      ?.getData('text')
      .replace(/\D/g, '')
      .slice(0, 6);

    if (!pasted) return;

    this.otp = pasted;

    pasted.split('').forEach((digit, index) => {
      const input = this.otpInputs.get(index)?.nativeElement;

      if (input) {
        input.value = digit;
      }
    });

    this.otpInputs
      .get(Math.min(pasted.length, 6) - 1)
      ?.nativeElement.focus();
  }

}
