import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <Link to="/" className="Link">Home</Link>
        <Link to="/about" className="Link">About Us</Link>
        <Link to="/article" className="Link">Articles</Link>
    </nav>
)

export default NavBar