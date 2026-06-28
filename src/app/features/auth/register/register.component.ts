import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink, LogoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  isSubmitting = false;

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

    // TODO: wire up registration API
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
    }, 400);
  }
}
