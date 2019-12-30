import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './TopBar.scss';
import User from '../../../shared/models/user.model';
import { logoutAction } from '../../../store/actions/app.actions';
import { push } from 'connected-react-router';

const TopBar = (): JSX.Element => {
    const user = useSelector(({ app }: any) => app.user) as User;
    const dispatch = useDispatch();

    const handleLogout = (e: React.MouseEvent): void => {
        e.preventDefault();
        dispatch(logoutAction());
        dispatch(push('/'));
    }
    
    let content: JSX.Element = (user && user.isLoggedIn) ?
        <>
            <span>
                <Link to='/profile'>
                    Profile
                </Link>
            </span>
            <span>
                <button onClick={handleLogout}>
                    Logout
                </button>
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