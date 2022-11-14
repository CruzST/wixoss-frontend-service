export class User {
    private _id: number;
    private _username: string;
    private _email: string;
    
    constructor(id: number, username: string, email: string) {
        this._id = id;
        this._username = username;
        this._email = email;
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
}
