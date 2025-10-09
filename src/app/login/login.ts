import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class Login {
  constructor(private auth: AuthService, private router: Router) {}

  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submitForm(form: FormGroup<LoginForm>) {
    if (form.invalid) {
      return;
    }

    const email: string = form.controls.email.value;
    const password: string = form.controls.password.value;
    this.auth.login(email, password);
    this.router.navigate(['/lista']);
  }
}
