import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './TopBar.scss';
import User from '../../../shared/models/user.model';

const TopBar = (): JSX.Element => {
    const user = useSelector(({ app }: any) => app.user) as User;
    
    let content: JSX.Element = (user && user.isLoggedIn) ?
        <>
            <span>
                <Link to='/profile'>
                    Profile
                </Link>
            </span>
            <span>
                <Link to='/logout'>
                    Logout
                </Link>
            </span>
        </> :
        <>
            <span>
                <Link to='/login'>
                    Login
                </Link>
            </span>
            <span>
                <Link to='/register'>
                    Register
                </Link>
            </span>
        </>;



    return (
        <div id='TopBar'>
            {content}
        </div>
    );
};

export default memo(TopBar);