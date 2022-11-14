import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      usernameFormControl: new FormControl('', [Validators.required]),
      passwordFormControl: new FormControl('', [Validators.required]),
      confirmPasswordFormControl: new FormControl('', [Validators.required, this.passwordMatchingValidatior]),
    });
  
  }

  

  validateForm() {
    if (this.userForm.controls['emailFormControl'].errors) {
      console.log(this.userForm)
      console.log(this.userForm?.hasError('notMatchingPasswords'));
    }
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const parentForm: FormGroup | FormArray | null = control?.parent;
    const password: AbstractControl | null | undefined = parentForm?.get('passwordFormControl');
    const confirmPassword: AbstractControl | null | undefined = parentForm?.get('confirmPasswordFormControl');
    return password?.value === confirmPassword?.value ? null : {notMatchingPasswords: true};
  };
}
