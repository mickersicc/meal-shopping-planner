import React from 'react';

import './Layout.scss';
import TopBar from './top-bar/TopBar';
import Footer from './footer/Footer';
import Content from './content/Content';

const Layout = (): JSX.Element => {
    return (
        <div id='Layout'>
            <TopBar />
            <Content />
            <Footer />
        </div>
    );
};

export default Layout;