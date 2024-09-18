// Header.jsx

import React from 'react';
import './Header.css'; // Import CSS style file for header


const Header = () => {
    return (
        <div>
            <><nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/nextMeet" className="nav-link">Next Meet</a>
                </li>
                <li className="nav-item">
                    <a href="/join" className="nav-link">Join</a>
                </li>
                <li className="nav-item">
                    <a href="/blog" className="nav-link">Blog</a>
                </li>
            </ul>
        </nav>
        
        <div class="form.example"></div><div class="background-image"></div><form class="example" action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                </form></>

        <blockquote>
            <p>"Courage doesn't mean your not afraid. It means you don't let it stop you.</p>
            <footer> - Bethany Hamilton</footer>
        </blockquote>
    </div>
    );       
};

export default Header;