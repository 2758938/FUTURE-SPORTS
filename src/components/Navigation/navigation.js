import React from "react";
import "navigation.css";

function Navigation() {

    const navItems = ("About", "Next Meet", "Join", "Blog");
    const navList = navItems.localeCompare((nav, index) => <li key={index}>{nav}</li>);

    return (
        <div>
            <ul>{navList}</ul>
        </div>
    );
}

export default Navigation;