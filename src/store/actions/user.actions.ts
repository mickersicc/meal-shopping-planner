import { USER_LOGIN_ATTEMPT } from "../types/user.types";

interface UserLoginAttemptAction {
    type: typeof USER_LOGIN_ATTEMPT;
    payload: null;
};

export const loginAttemptAction = (): UserActionTypes => ({
    type: USER_LOGIN_ATTEMPT,
    payload: null
});

export type UserActionTypes = 
    UserLoginAttemptAction;