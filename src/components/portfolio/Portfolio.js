import React from "react";
import { Carousel } from "react-bootstrap";
import DnDSlide3 from "../images/DnDSlide3.PNG";
import DnDSlide2 from "../images/dndviewchar.PNG";
import DndSlide1 from "../images/login page.PNG";
import Meal1 from "../images/projectGif1.gif";
import Meal2 from "../images/projectGif2.gif";
import RGen from "../images/randompassword gen.PNG";
import Planner from "../images/page-image-layout.PNG";
import "./Portcss.css";

function Portfolio() {
    return (
        <div>
            {/* Project 2 Start */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={DndSlide1}
                        alt="Log In Page Dungeons And Dragons"
                    />
                    <Carousel.Caption>
                        <h3>Log In Page</h3>
                        <p>A log in page with validation to make sure you are entering valid email and password</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={DnDSlide2}
                        alt="Home Page Dungeons And Dragons"
                    />

                    <Carousel.Caption>
                        <h3>View Characters</h3>
                        <p>This page allows you to see all of the characters you have created for previous campaigns.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={DnDSlide3}
                        alt="Character Page Dungeons And Dragons"
                    />

                    <Carousel.Caption>
                        <h3>Character Page</h3>
                        <p>Here you can see all of your characters info, general stats, mods and additional information like equipment</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Project 2 end */}
            {/* Project 1 Start */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Meal1}
                        alt="Suprise Me-al Home Page"
                    />
                    <Carousel.Caption>
                        <h3>Surpise Me-al Home page</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Meal2}
                        alt="Generated Food/Drink gif"
                    />

                    <Carousel.Caption>
                        <h3>Food Page</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Project 1 end */}
            {/* Password Generator Start */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={RGen}
                        alt="Random Password Generator"
                    />
                </Carousel.Item>

            </Carousel>
            {/* Password Generator End */}
            {/* Daily Planner Start */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Planner}
                        alt="Daily Planner"
                    />
                </Carousel.Item>
            </Carousel >
            {/* Daily Planner End*/}
        </div>
    )
}

export default Portfolio;