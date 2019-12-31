import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import './Login.scss';
import { loginAttemptAction, loginSuccessAction, loginFailureAction } from '../../store/actions/app.actions';
import { login } from '../../shared/services/api.service';
import { push } from 'connected-react-router';

interface IField {
    name: string;
    value: string;
    valid: boolean;
}

const Login = (): JSX.Element => {
    const [userName, setUserName] = useState({} as IField);
    const [password, setPassword] = useState({} as IField);
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    const checkValidity = (): void => {
        setDisabled(userName.valid && password.valid ? false : true);
    };

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, validity } = e.target;
        setUserName({ name, value, valid: validity.valid });
        checkValidity();
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, validity } = e.target;
        setPassword({ name, value, valid: validity.valid });
        checkValidity();
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        dispatch(loginAttemptAction(userName.value, password.value));
        const result = await login(userName.value, password.value);
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
                    <input
                        type='text'
                        name='user-name'
                        placeholder='User name'
                        onChange={handleUserNameChange}
                        minLength={4}
                        maxLength={20}
                        required
                    />
                    <input
                        type='password'
                        name='user-password'
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        minLength={8}
                        maxLength={20}
                        pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
                        required
                    />
                    <div id='login-form__submit-btn-container'>
                        <button type='submit' id='login-btn' className='btn' disabled={disabled}>Log in</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default memo(Login);