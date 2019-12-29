import React from 'react';

import './TopBar.scss';
import { Link } from 'react-router-dom';

const TopBar = (): JSX.Element => {
    return (
        <div id='TopBar'>
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
        </div>
    );
};

export default TopBar;