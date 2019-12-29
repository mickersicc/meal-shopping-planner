import { APP_LOGIN_ATTEMPT } from "../types/app.types";

interface AppLoginAttemptAction {
    type: typeof APP_LOGIN_ATTEMPT;
    payload: null;
};

export const loginAttemptAction = (): AppActionTypes => ({
    type: APP_LOGIN_ATTEMPT,
    payload: null
});

export type AppActionTypes = 
    AppLoginAttemptAction;