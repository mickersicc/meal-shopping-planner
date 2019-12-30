import React from 'react';

import './Content.scss';
import { Route, Switch } from 'react-router';
import Login from '../../../components/login/Login';
import Home from '../../../components/home/Home';

const Content = (): JSX.Element => {
    return (
        <div id='Content'>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Switch>
        </div>
    );
};

export default Content;