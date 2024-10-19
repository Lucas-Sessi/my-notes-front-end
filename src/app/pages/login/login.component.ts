import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import sha1 from 'sha1';
import { AuthService } from '../../guards/guard.service';
import { LoginService } from '../../services/login.service';
import { Login } from './model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly authService: AuthService,
    private readonly messageService: MessageService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return
    }

    const body: Login = {
      email: this.loginForm.value.email,
      password: sha1(this.loginForm.value.password),
    }

    this.loginService.login(body.email, body.password).subscribe({
      next: (user) => {
        this.authService.login(user.data);

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful',
          });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.message ? error.error.message : 'Erro ao fazer login',
        });

        console.error('Login error:', error);
      }
    });
  }
}
