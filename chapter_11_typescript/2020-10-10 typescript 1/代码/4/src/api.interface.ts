interface IUser {
    username: string;
    password: string;
}

export interface IResponseUser {
    id: number;
    username: string;
}

export interface IUserLogin extends IUser {

}

export interface IUserRegister extends IUser{
    repassword: string;
}