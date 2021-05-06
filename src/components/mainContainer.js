import React from "react";
import PortNav from "./navBar/navBar.js"
import { Container } from "react-bootstrap"
import { Component } from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./portfolio/Portfolio.js";

class MainContainer extends Component {


    render() {
        return (
            <div>
                <PortNav />
                <Container>
                    <AboutMe />
                    <Portfolio> </Portfolio>
                </Container>
            </div>

        )
    }
}


export default MainContainer;