import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function PortNav() {
    return (

        <div>
            <li><Link style={{ textDecoration: "none", color: "grey" }} as={Link} to={"/"} className="cool-link">Home</Link></li>
            <li><Link style={{ textDecoration: "none", color: "grey" }} as={Link} to={"/about"} className="cool-link">About Me</Link></li>
            <li><Link style={{ textDecoration: "none", color: "grey" }} as={Link} to={"/portfolio"} className="cool-link">Portfolio</Link></li>
        </div>
    )
}

export default PortNav;