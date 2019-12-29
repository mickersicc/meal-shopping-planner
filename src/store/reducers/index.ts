import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './app.reducer';

export default (history: any) => combineReducers({
    router: connectRouter(history),
    app: appReducer
});