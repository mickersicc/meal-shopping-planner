import React, { memo, useState } from 'react';

import './Login.scss';

const Login = (): JSX.Element => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
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