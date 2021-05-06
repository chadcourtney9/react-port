import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function PortNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Chad Courtney</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#features">About Me</Nav.Link>
                <Nav.Link href="#pricing">Portfolio</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default PortNav;