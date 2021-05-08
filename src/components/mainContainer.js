import React from "react";
import PortNav from "./navBar/navBar.js"
import { Component } from "react";
import AboutMe from "./aboutme/AboutMe";
import Portfolio from "./portfolio/Portfolio.js";
import Footer from "./footer/footer.js";
import "./portfolio/Portcss.css";
import Intro from "./intro/intro";
import "./maincss.css";
import { Switch, Route } from "react-router-dom";
import { ABOUT_PATH, PORTFOLIO_PATH, INTRO_PATH } from "../viewRoutes";


class MainContainer extends Component {

    render() {
        return (
            <div className="body-css">
                <PortNav />
                <Switch>
                    <Route exact={true} path={INTRO_PATH}>
                        <Intro />
                    </Route>
                    <Route exact={true} path={ABOUT_PATH}>
                        <AboutMe />
                    </Route>
                    <Route exact={true} path={PORTFOLIO_PATH}>
                        <Portfolio />
                    </Route>
                </Switch>
                <Footer />
            </div>
        )
    }
}


export default MainContainer;