import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div id="navBar">
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/projects'>
                <button>Projects</button>
            </Link>
            <Link to='/resume'>
                <button>Resume</button>
            </Link>
            <Link to='/contact'>
                <button>Contact</button>
            </Link>
        </div>
    );
}

export default NavBar;