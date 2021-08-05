import React from "react";
import { Component } from "react";
import ChadCap from ".././images/Capture2.PNG"
import "./aboutmecss.css";
import { Jumbotron, Container } from "react-bootstrap";

class AboutMe extends Component {

    render() {
        return (
            <div >
                <Jumbotron fluid>
                    <Container className="amContainer">
                        <h1 className="amHeader">About Me</h1>
                        <img src={ChadCap} alt="lumberChad" className="lumberChad" />
                        <p className="amP">
                            Hello, my name is Chad Courtney. I am a full stack developer with a real strong eye for aesthetics. Also have strong teamwork and coordination skills after working with agile development practices creating full-stack web apps. Always seeking to improve my skills, with both frontend and backend languages! If you're interested in working together, feel free to reach out to me through the any of the links below! Graduated from University of New Hampshire in Full Stack Web Development.
                        </p>
                        <br></br>
                        <li><a style={{ textDecoration: "none", color: "grey" }} className="cool-link" href="tel: 9784573908" >Phone</a></li>
                        <li><a style={{ textDecoration: "none", color: "grey" }} className="cool-link" href="mailto: chadcourtney567@gmail.com" >Email</a></li>
                    </Container>
                </Jumbotron>
            </div >
        )
    }
}

export default AboutMe;