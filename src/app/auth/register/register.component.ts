import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z\s]*$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9._]{3,}@(?:[a-zA-Z0-9]+\.)+(com|net)$/),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z0-9]*$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }
  // this.confirmPasswordValidator
  // confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //   const password = this.registerForm.get('password').value;
  //   const confirmPassword = control.value;

  //   return password === confirmPassword ? null : { passwordsNotMatch: true };
  // }

  handleSubmit() {
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      console.log('Passwords do not match.');
    }
  }
}
