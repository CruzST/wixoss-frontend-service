import { Component, OnInit, ViewChild } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators, } from '@angular/forms';
import { AuthDataService } from 'src/app/services/authentication/auth-data.service';
import { UserRequest } from 'src/app/dto/payloads/userRequest';
import { LoginRequest } from 'src/app/dto/payloads/loginRequest';
import { InterceptorMessageServiceService } from 'src/app/services/interceptor-message/interceptor-message-service.service';
import { Subscription } from 'rxjs';

class FormText {
    headerText: string;
    submitButtonText: string;
    formHelperText: string;
    redirectText: string;

    constructor(
        headerText: string,
        submitButtonText: string,
        formHelperText: string,
        redirectText: string) {
        this.headerText = headerText;
        this.submitButtonText = submitButtonText;
        this.formHelperText = formHelperText;
        this.redirectText = redirectText;
    }
}

class InterceptorMessage {
    message: string = null;
    status: number = null;
    constructor(message?: string, status?: number) {
        this.message = message;
        this.status = status;
    }
}

@Component({
    selector: 'login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
    formType = {
        signIn: 'Sign In',
        forgotPassword: 'Forgot Password',
        register: 'Register',
    };

    @ViewChild('form') form: any;

    authError = new InterceptorMessage();
    newUserText: FormText = new FormText(
        this.formType.register,
        'Submit',
        'Have an account?',
        'Sign in here');
    signInText: FormText = new FormText(
        this.formType.signIn,
        'Sign In',
        'Need to Register?',
        'Register here');
    forgotPasswordText: FormText = new FormText(
        this.formType.forgotPassword,
        'Send Recovery Email',
        'Have an account?',
        'Sign in here');
    formText: FormText;
    userForm: FormGroup;
    signIn: boolean;
    newUser: boolean;
    forgotPassword: boolean;

    interceptorMsgServiceSub: Subscription;

    constructor(
        private authService: AuthDataService,
        private interceptorMsgService: InterceptorMessageServiceService) {

    }

    ngOnInit(): void {
        this.newUser = false;
        this.resetFormTo(this.formType.signIn);
        this.interceptorMsgServiceSub =
            this.interceptorMsgService.status.subscribe((status) => {
                this.authError.status = status;
            });

        this.interceptorMsgServiceSub.add(
            this.interceptorMsgService.message.subscribe((message) => {
                this.authError.message = message;
            })
        );
    }

    ngOnDestroy(): void {
        this.interceptorMsgServiceSub.unsubscribe();
    }

    onSubmit() {
        if (this.newUser) {
            const username =
                this.userForm.controls['usernameFormControl'].value;
            const password =
                this.userForm.controls['passwordFormControl'].value;
            const email = this.userForm.controls['emailFormControl'].value;
            const newUserRequest = new UserRequest(username, email, password);
            this.authService
                .registerNewUser(newUserRequest)
                .subscribe((resp) => {
                    // Redirect user to home page and be logged in
                    // OR
                    // Give toast of some sort to user and reset form to Sign in
                    console.log('in login register', resp);
                });
        } else if (this.signIn) {
            const email = this.userForm.controls['emailFormControl'].value;
            const password =
                this.userForm.controls['passwordFormControl'].value;
            const loginRequest: LoginRequest = new LoginRequest(
                email,
                password
            );
            this.authService.login(loginRequest);
        }
    }

    passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const parentForm: FormGroup | FormArray | null = control?.parent;
        const password: AbstractControl | null | undefined = parentForm?.get('passwordFormControl');
        const confirmPassword: AbstractControl | null | undefined =
            parentForm?.get('confirmPasswordFormControl');
        return password?.value === confirmPassword?.value ? null : { notMatchingPasswords: true };
    };

    onPasswordChange() {
        if (this.newUser) {
            this.userForm.controls['confirmPasswordFormControl'].updateValueAndValidity();
        }
    }

    getAuthErrorMsg(code: number): string {
        let msg = null;
        switch (code) {
            case 401:
                msg = 'An invalid password was provided!';
                break;
            case 404:
                msg = 'An invalid email was provided!';
                break;
            case 409:
                msg = 'That email is already in use!';
                break;
            case 400:
                msg = 'Username not allowed!';
                break;
            default:
                msg = this.authError.message;
        }
        return msg;
    }

    getRedirectLocation(): void {
        this.signIn ? this.resetFormTo(this.formType.register) : this.resetFormTo(this.formType.signIn);
    }

    goToForgotPassword(): void {
        this.resetFormTo(this.formType.forgotPassword);
    }

    getAuthErrorStatus(): boolean {
        return this.authError.status ? true : false;
    }

    resetAuthError(): void {
        this.interceptorMsgService.setStatus(null);
        this.interceptorMsgService.setMessage(null);
    }

    resetFormTo(formType: string): void {
        this.resetAuthError();
        switch (formType) {
            case this.formType.forgotPassword: {
                this.formText = this.forgotPasswordText;
                this.forgotPassword = true;
                this.signIn = false;
                this.newUser = false;
                this.userForm = new FormGroup({
                    emailFormControl: new FormControl('', [Validators.required, Validators.email])
                });
                break;
            }
            case this.formType.register: {
                this.formText = this.newUserText;
                this.forgotPassword = false;
                this.signIn = false;
                this.newUser = true;
                this.userForm = new FormGroup({
                    emailFormControl: new FormControl('', [Validators.required,Validators.email,]),
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
        this.form?.resetForm();
    }

    /* Notes
    Before I could use the below to add FormControls to the FormGroup.
    this.userForm.addControl('usernameFormControl', this.formBuilder.control('', [Validators.required]));
    this.userForm.addControl('confirmPasswordFormControl', this.formBuilder.control('', [Validators.required, this.passwordMatchingValidatior]));
  */
}
