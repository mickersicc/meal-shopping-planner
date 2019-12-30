import ILoginResult from "../../interfaces/results/login-result.interface";
import User from "../user.model";

export default class LoginResult implements ILoginResult{
    id: string;
    isSuccessful: boolean;
    message: string;
    code: number;
    token: string;
    user: User;

    constructor(result: LoginResult) {
        this.id = result && result.id ? result.id : '';
        this.isSuccessful = result && result.isSuccessful ? result.isSuccessful : false;
        this.message = result && result.message ? result.message : '';
        this.code = result && result.code ? result.code : 404;
        this.token = result && result.token ? result.token : '';
        this.user = result && result.user ? result.user : new User();
    }
}