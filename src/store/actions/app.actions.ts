import { APP_LOGIN_ATTEMPT, APP_LOGIN_SUCCESS, APP_LOGIN_FAILURE, APP_LOGOUT } from "../types/app.types";
import LoginRequest from "../../shared/models/requests/login-request.model";
import LoginResult from "../../shared/models/results/login-result.model";
import ILoginResult from "../../shared/interfaces/results/login-result.interface";

interface AppLoginAttemptAction {
    type: typeof APP_LOGIN_ATTEMPT;
    payload: LoginRequest;
};

export const loginAttemptAction = (userName: string, password: string): AppActionTypes => ({
    type: APP_LOGIN_ATTEMPT,
    payload: new LoginRequest({ userName, password })
});

interface AppLoginSuccessAction {
    type: typeof APP_LOGIN_SUCCESS,
    payload: LoginResult
};

export const loginSuccessAction = (result: ILoginResult): AppActionTypes => ({
    type: APP_LOGIN_SUCCESS,
    payload: new LoginResult(result)
});

interface AppLoginFailureAction {
    type: typeof APP_LOGIN_FAILURE,
    payload: LoginResult
};

export const loginFailureAction = (result: ILoginResult): AppActionTypes => ({
    type: APP_LOGIN_FAILURE,
    payload: new LoginResult(result)
});

interface AppLogoutAction {
    type: typeof APP_LOGOUT,
    payload: null
};

export const logoutAction = (): AppActionTypes => ({
    type: APP_LOGOUT,
    payload: null
});

export type AppActionTypes =
    AppLoginAttemptAction |
    AppLoginSuccessAction |
    AppLoginFailureAction |
    AppLogoutAction;