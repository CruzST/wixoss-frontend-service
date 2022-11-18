export class LoginRequest {
    private email;
    private password;
    
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
}