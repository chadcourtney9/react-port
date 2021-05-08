import React from "react";
import "./footer.css"
import { Button } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer-colour text-center text-white fixed-bottom">

            <section className="container p-1">


                <Button variant="outline-dark m-1" href="https://www.linkedin.com/in/chad-courtney-7951721ba/" role="button"
                ><i className="fab fa-linkedin-in"></i
                ></Button>

                <Button variant="outline-dark m-1" href="https://github.com/chadcourtney9" role="button"
                ><i className="fab fa-github"></i
                ></Button>
            </section>

        </footer>
    )
}

export default Footer;