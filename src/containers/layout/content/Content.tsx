import React from 'react';

import './Content.scss';
import { Route, Switch } from 'react-router';

const Content = (): JSX.Element => {
    return (
        <div id='Content'>
            <Switch>
                <Route exact path='/'>
                    <p>Home</p>
                </Route>
            </Switch>
        </div>
    );
};

export default Content;