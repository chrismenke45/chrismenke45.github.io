import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <address id="contact">
            <a href="mailto: chrismenke45@gmail.com?Subject=Working%20Together" type="email">
                <FontAwesomeIcon icon={faEnvelope} id="email" className="icon growHover" />
            </a>
            <a href="https://github.com/chrismenke45" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} id="gitHub" className="icon growHover" />
            </a>
            <a href="https://linkedin.com/in/chrismenke45" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} id="gitHub" className="icon growHover" />
            </a>
        </address>
    );
}

export default Contact;