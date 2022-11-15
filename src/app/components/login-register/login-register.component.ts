import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';




class FormText {
  headerText: string;
  submitButtonText: string;
  formHelperText: string;
  redirectText: string;

  constructor(headerText: string, submitButtonText: string, formHelperText: string, redirectText: string) {
    this.headerText = headerText;
    this.submitButtonText = submitButtonText;
    this.formHelperText = formHelperText;
    this.redirectText = redirectText;
  }
}

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  newUserText: FormText = new FormText('Register', 'Submit', 'Have an account?', 'Sign in here');
  signInText: FormText = new FormText('Sign In', 'Sign In', 'Need to Register?', 'Register here');
  forgotPasswordText: FormText = new FormText('Forgot Password?', 'Send Recovery Email', 'Have an account?', 'Sign in here');

  formText: FormText;


  headerText: string;
  submitText: string;
  formHelperText: string;
  redirectText: string;

  userForm: FormGroup;
  signIn: boolean;
  newUser: boolean;
  forgotPassword: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newUser = false;
    this.resetFormTo('signIn');
  }



  /* FOR TESTING */
  validateForm() {
    console.log(this.userForm)
  }


  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const parentForm: FormGroup | FormArray | null = control?.parent;
    const password: AbstractControl | null | undefined = parentForm?.get('passwordFormControl');
    const confirmPassword: AbstractControl | null | undefined = parentForm?.get('confirmPasswordFormControl');
    return password?.value === confirmPassword?.value ? null : {notMatchingPasswords: true};
  };

  onPasswordChange() {
    if (this.newUser) { this.userForm.controls['confirmPasswordFormControl'].updateValueAndValidity(); }
  }


  resetFormTo(formType: string): void {
    switch(formType) {
      case 'forgotPassword': {
        this.formText = this.forgotPasswordText;
        this.forgotPassword = true;
        this.signIn = false;
        this.newUser = false;
        this.userForm = new FormGroup({
          emailFormControl: new FormControl('', [Validators.required, Validators.email])});
        break;
      }
      case 'newUser': {
        this.formText = this.newUserText;
        this.forgotPassword = false;
        this.signIn = false;
        this.newUser = true;
        this.userForm = new FormGroup({
          emailFormControl: new FormControl('', [Validators.required, Validators.email]),
          passwordFormControl: new FormControl('', [Validators.required]),
          usernameFormControl: new FormControl('', [Validators.required]),
          confirmPasswordFormControl: new FormControl('', [Validators.required, this.passwordMatchingValidatior])
        });
        break;
      }
      default: {
        this.formText = this.signInText;
        this.forgotPassword = false;
        this.signIn = true;
        this.newUser = false;
        this.userForm = new FormGroup({
          emailFormControl: new FormControl('', [Validators.required, Validators.email]),
          passwordFormControl: new FormControl('', [Validators.required])
        });
        break;
      }
    }
  }

  toggleNewUserStatus(): void {
    if (this.newUser) {
      this.newUser = false;
      this.resetFormTo('signIn');
    } else {
      this.newUser = true;
      this.resetFormTo('newUser');
    }
  }

  /* Notes
    Before I could use the below to add FormControls to the FormGroup.
    this.userForm.addControl('usernameFormControl', this.formBuilder.control('', [Validators.required]));
    this.userForm.addControl('confirmPasswordFormControl', this.formBuilder.control('', [Validators.required, this.passwordMatchingValidatior]));
  
  */
}
