import React, { useRef } from "react";
import { Link } from 'react-router-dom'

function NavBar() {
    let homeButton = useRef()
    let projectsButton = useRef()
    let resumeButton = useRef()
    let contactButton = useRef()
    let buttonRefs = [homeButton, projectsButton, resumeButton, contactButton]
    const highlightButton = (e) => {
        let normalButtonTextColor = 'rgb(23, 102, 102)'
        buttonRefs.forEach(buttonRef => {
            buttonRef.current.style.color = normalButtonTextColor
        })
        if (e.target.querySelector('span')) {
            e.target.querySelector('span').style.color = 'white'
        } else {
            e.target.style.color = 'white'
        }   
    }
    return (

        <nav id="navBar">
            <Link to='/'>
                <button onClick={highlightButton}><span style={{color: 'white'}} ref={homeButton}>Home</span></button>
            </Link>
            <Link to='/projects'>
                <button onClick={highlightButton}><span ref={projectsButton}>Projects</span></button>
            </Link>
            <Link to='/resume'>
                <button onClick={highlightButton}><span ref={resumeButton}>Resume</span></button>
            </Link>
            <Link to='/contact'>
                <button onClick={highlightButton}><span ref={contactButton}>Contact</span></button>
            </Link>
        </nav>
    );
}

export default NavBar;