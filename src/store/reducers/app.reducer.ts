import { AppActionTypes } from "../actions/app.actions";
import { APP_LOGIN_ATTEMPT } from "../types/app.types";
import App from "../../shared/models/app.model";

const initialState: App = new App();

export default function appReducer(state = initialState, action: AppActionTypes): any {
    switch (action.type) {
        case APP_LOGIN_ATTEMPT:
            return {
                ...state
            }
    
        default:
            return state;
    }
}