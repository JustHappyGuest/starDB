import React from 'react';
import Search from '../search';
import Navbar from '../navbar';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">STARDB</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Navbar>
                    <Link to="/people/" className="nav-link">People</Link>
                    <Link to="/planets/" className="nav-link">Planets</Link>
                    <Link to="/starships/" className="nav-link">Starships</Link>
                </Navbar>
                <Search />
            </div>
        </nav>
    );
}

export default Header;