import React from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>header</header>
            <div>
                <Outlet />
            </div>
            <footer>footer</footer>
        </>
    );
};

export default Layout;
