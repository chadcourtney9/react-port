import React from "react";
import DndSlide1 from "../images/DndHome.png";
import Meal from "../images/mealFix.PNG";
import Planner from "../images/dailyplannerfix.PNG";
import RGen from "../images/randompassword gen.PNG";
import BudgetTracker from "../images/budget-tracker.PNG";
import FitnessTracker from "../images/fitnessTracker.PNG";
import "./Portcss.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <div className="imgHolder">
            <h1 className="portHeader">Projects</h1>
            <Row className="portRow">
                <Container className="portContainer col-md-6">
                    <div className="content">
                        <a href="https://character-creator-express.herokuapp.com/login" rel="noreferrer" target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={DndSlide1} alt="Dnd page" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Character Creator Express</h3>
                                <p className="content-text">Quickly create Character for D&D campaings. Click background to see page!</p>
                                <Link style={{ textDecoration: "none", color: "grey" }}
                                    className="content-text"
                                    href="https://github.com/chadcourtney9/dnd-quick-character-creator"><i
                                        className="fab fa-github"></i> Code</Link>
                            </div>
                        </a>
                    </div>
                </Container>
                <Container className="portContainer col-md-6">
                    <div className="content">
                        <a href="https://character-creator-express.herokuapp.com/login" rel="noreferrer" target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={Meal} alt="Dnd page" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Suprise Me-al</h3>
                                <p className="content-text">Quickly find meals around the world to make for dinner! Click background to see page!</p>
                                <Link style={{ textDecoration: "none", color: "grey" }}
                                    className="content-text"
                                    href="https://github.com/chadcourtney9/dnd-quick-character-creator"><i
                                        className="fab fa-github"></i> Code</Link>
                            </div>
                        </a>
                    </div>
                </Container>
                <Container className="portContainer col-md-6">
                    <div className="content">
                        <a href="https://lit-shore-77411.herokuapp.com/?id=607d95d51873600015c1794a" rel="noreferrer" target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={FitnessTracker} alt="Dnd page" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Fitness Tracker</h3>
                                <p className="content-text">An app to help keep track of your workouts throughout the week. Click background to see page!</p>
                                <Link
                                    style={{ textDecoration: "none", color: "grey" }}
                                    className="content-text"
                                    href="https://github.com/chadcourtney9/Fitness-Tracker"><i
                                        className="fab fa-github"></i> Code</Link>
                            </div>
                        </a>
                    </div>
                </Container>
                <Container className="portContainer col-md-6">
                    <div className="content">
                        <a href="https://chadcourtney9.github.io/Daily-Planner/" rel="noreferrer" target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={RGen} alt="Dnd page" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Random Password Generator</h3>
                                <p className="content-text">Generate a strong random password with selected characters! Click background to see page!</p>
                                <Link
                                    style={{ textDecoration: "none", color: "grey" }}
                                    className="content-text"
                                    href="https://github.com/chadcourtney9/Random-Password-Gen"><i
                                        className="fab fa-github"></i> Code</Link>
                            </div>
                        </a>
                    </div>
                </Container>
                <Container className="portContainer col-md-6">
                    <div className="content">
                        <a href="https://stormy-taiga-31660.herokuapp.com/" rel="noreferrer" target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={BudgetTracker} alt="Dnd page" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Budget Tracker</h3>
                                <p className="content-text">This app helps you manage your spending online or offline! Click to see page!</p>
                                <Link
                                    style={{ textDecoration: "none", color: "grey" }}
                                    className="content-text"
                                    href="https://github.com/chadcourtney9/budget-tracker"><i
                                        className="fab fa-github"></i> Code</Link>
                            </div>
                        </a>
                    </div>
                </Container>
                <Container className="portContainer col-md-6">
                    <div className="content">
                        <a href="https://character-creator-express.herokuapp.com/login" rel="noreferrer" target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src={Planner} alt="Dnd page" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Daily Planner</h3>
                                <p className="content-text">Sort daily tasks based hourly to organize your day! Click background to see page!</p>
                                <Link
                                    style={{ textDecoration: "none", color: "grey" }}
                                    className="content-text"
                                    href="https://github.com/chadcourtney9/Daily-Planner"><i
                                        className="fab fa-github"></i> Code</Link>
                            </div>
                        </a>
                    </div>

                </Container>
            </Row>

        </div >
    )

}

export default Portfolio;