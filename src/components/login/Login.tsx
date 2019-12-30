import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import './Login.scss';
import { loginAttemptAction, loginSuccessAction, loginFailureAction } from '../../store/actions/app.actions';
import { login } from '../../shared/services/api.service';
import { push } from 'connected-react-router';

const Login = (): JSX.Element => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        dispatch(loginAttemptAction(userName, password));
        const result = await login(userName, password);
        if (result.isSuccessful) {
            dispatch(loginSuccessAction(result));
            dispatch(push('/'));
        } else {
            dispatch(loginFailureAction(result));
        }
    };

    return (
        <div id='login'>
            <form id='login-form' onSubmit={handleLogin}>
                <div id='login-form__fields'>
                    <div>
                        Login
                    </div>
                    <input type='text' name='user-name' placeholder='User name' onChange={handleUserNameChange} />
                    <input type='text' name='user-password' placeholder='Password' onChange={handlePasswordChange} />
                    <div id='login-form__submit-btn-container'>
                        <button type='submit' id='login-btn' className='btn'>Log in</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default memo(Login);