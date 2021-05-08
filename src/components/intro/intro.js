import React from "react";
import { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./introCss.css";

class Intro extends Component {

    render() {
        return (
            <div>
                <Container className="introCont">
                    <Row className="nameRow">
                        <Col>
                            <h1 className="col-12">Chad Courtney</h1>
                            <Link to="/about" className="m-1">
                                <Button variant="outline-light" size="md">
                                    About
                                </Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="outline-light" className="m-1" size="md">
                                    Portfolio
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Intro;