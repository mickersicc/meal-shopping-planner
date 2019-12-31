import { AppActionTypes } from "../actions/app.actions";
import { APP_LOGIN_ATTEMPT, APP_LOGIN_SUCCESS, APP_LOGIN_FAILURE, APP_LOGOUT } from "../types/app.types";
import App from "../../shared/models/app.model";
import User from "../../shared/models/user.model";
import session from '../../shared/services/session.service';

const initialState: App = new App();

export default function appReducer(state = initialState, action: AppActionTypes): App {
    switch (action.type) {
        case APP_LOGIN_ATTEMPT:
            return {
                ...state
            }
        case APP_LOGIN_SUCCESS:
            session().setItem('app', action.payload.token);
            return {
                ...state,
                user: { ...action.payload.user }
            }
        case APP_LOGIN_FAILURE:
            return {
                ...state
            }
        case APP_LOGOUT:
            session().removeItem('app');
            return {
                ...state,
                user: { ...new User() }
            }
        default:
            return state;
    }
}