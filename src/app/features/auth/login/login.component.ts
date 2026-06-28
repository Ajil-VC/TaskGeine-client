import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  isSubmitting = false;

  login(): void {
    const email = this.email.trim();
    const password = this.password.trim();

    if (!email || !password || this.isSubmitting) {
      return;
    }

    // TODO: wire up authentication API
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
    }, 400);
  }
}
