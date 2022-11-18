export class AuthPayload {
    private _email: string;
    private _token: string;
    
    
    constructor(email: string, token: string) {
        this._email = email;
        this._token = token;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }
    
    public get token(): string {
        return this._token;
    }
    
    public set token(value: string) {
        this._token = value;
    }

    /*
    getEmail() {
        return this.email;
    }

    getToken() {
        return this.token;
    }*/
}