export class UserRequest {
    private username: string;
    private userEmail: string;
    private userPassword: string;
    
    constructor(username: string, userEmail: string, userPassword: string) {
        this.username = username;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}