import { createStore, compose, applyMiddleware } from 'redux';
import * as History from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

export const history = History.createBrowserHistory();

const initialState: any = {};
const enhancers: Array<any> = [];

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(routerMiddleware(history)),
    ...enhancers
);

export const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
);