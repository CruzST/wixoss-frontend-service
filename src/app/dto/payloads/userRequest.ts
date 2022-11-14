export class UserRequest {
    private _username: string;
    private _userEmail: string;
    private _userPassword: string;
    
    constructor(username: string, userEmail: string, userPassword: string) {
        this._username = username;
        this._userEmail = userEmail;
        this._userPassword = userPassword;
    }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get userEmail(): string {
        return this._userEmail;
    }

    public set userEmail(value: string) {
        this._userEmail = value;
    }

    public get userPassword(): string {
        return this._userPassword;
    }

    public set userPassword(value: string) {
        this._userPassword = value;
    }
}