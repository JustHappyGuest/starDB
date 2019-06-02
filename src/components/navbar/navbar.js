import React from 'react';

const Navbar = ({children}) => (
    <ul className="navbar-nav mr-auto">
        {React.Children.map(children, child => <li className="nav-item">{child}</li>)}
    </ul>
);

export default Navbar;