import appReducer from '../reducers/app.reducer';
import { APP_LOGIN_ATTEMPT, APP_LOGIN_SUCCESS } from '../types/app.types';
import LoginRequest from '../../shared/models/requests/login-request.model';
import App from '../../shared/models/app.model';
import LoginResult from '../../shared/models/results/login-result.model';

describe('App Reducer', () => {
    const intitialState = new App();

    test('should equal initial state when an attempt is made', () => {
        expect(appReducer(intitialState, {
            type: APP_LOGIN_ATTEMPT,
            payload: new LoginRequest({ userName: 'test', password: 'test' })
        })).toEqual(intitialState);
    });

    test('should update the state when a user is logged in', () => {
        const result = new LoginResult({
            id: '81c00be0-61da-40b3-a6af-4cca64415aed',
            isSuccessful: true,
            message: 'Success',
            code: 200,
            token: '148a7cb0-2aa2-40e1-94e3-dd8d55cf4dc8',
            user: {
                id: 'f1783298-7ddc-49c2-9355-1bf580293a7e',
                firstName: 'test',
                lastName: 'test',
                isLoggedIn: true
            }
        });

        expect(appReducer(intitialState, {
            type: APP_LOGIN_SUCCESS,
            payload: result
        })).toEqual({
            user: {
                id: 'f1783298-7ddc-49c2-9355-1bf580293a7e',
                firstName: 'test',
                lastName: 'test',
                isLoggedIn: true
            }
        });
    });
});
