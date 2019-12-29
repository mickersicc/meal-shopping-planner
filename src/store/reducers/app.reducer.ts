import { AppActionTypes } from "../actions/app.actions";
import { APP_LOGIN_ATTEMPT } from "../types/app.types";

const initialState: any = {};

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