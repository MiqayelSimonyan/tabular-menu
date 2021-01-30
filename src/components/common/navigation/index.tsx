import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink exact activeClassName="navigation-active" to="/">Tabular Menu</NavLink>
        </nav>
    );
};

export default memo(Navigation);