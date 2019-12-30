import ILoginRequest from "../../interfaces/requests/login-request.interface";

export default class LoginRequest implements ILoginRequest {
    userName: string;
    password: string;

    constructor(request: LoginRequest) {
        this.userName = request && request.userName ? request.userName : '';
        this.password = request && request.password ? request.password : '';
    }
};