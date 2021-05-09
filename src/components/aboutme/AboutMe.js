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
                            Hello, my name is Chad Courtney. I have recently started taking up classes to start learning coding. I am currently enrolled at UNH's bootcamp, I have been building computers for about 7 years and learning a lot about the hardward that goes into them. I'm an avid lover of eSports and my goal is to work for a professional gaming team. I have followed the League of Legends Champion Series for the last 5-6 years and would love to work in the U.S. If I had to make a choice for a team to work for it would definitely be Team Liquid. They have a great brand and from what I can see an amazing enviorment with incredibly great leaders. By 2022 I hope to be a developer for them in either the States or their facility in the Netherlands!
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