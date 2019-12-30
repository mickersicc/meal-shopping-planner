import { AppActionTypes } from "../actions/app.actions";
import { APP_LOGIN_ATTEMPT, APP_LOGIN_SUCCESS, APP_LOGIN_FAILURE } from "../types/app.types";
import App from "../../shared/models/app.model";
import User from "../../shared/models/user.model";

const initialState: App = new App();

export default function appReducer(state = initialState, action: AppActionTypes): any {
    switch (action.type) {
        case APP_LOGIN_ATTEMPT:
            return {
                ...state,
                ...action.payload
            }
        case APP_LOGIN_SUCCESS:
            return {
                ...state,
                ...new User()
            }
        case APP_LOGIN_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}