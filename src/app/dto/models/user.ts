export class User {
    private _id: number;
    private _username: string;
    private _email: string;
    private _authorities: string[];
    
    
    constructor(id: number, username: string, email: string, authorities: string[]) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._authorities = authorities
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
    
    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get authorities(): string[] {
        return this._authorities;
    }

    public set authorities(value: string[]) {
        this._authorities = value;
    }
}
