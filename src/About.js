import React from "react";

function About() {
    return (
        <section id="about">
            <p>
                I'm a web developer with experience building websites with HTML, CSS, JavaScript, React, Node.js, Ruby on Rails, SQL and MongoDB. 
                I have also started to learn Python/Flask for my internship. Please checkout my projects and <a href="Resume.pdf" download={true}>resume</a>.  
                Reach out to me if you think I’d be the right fit for you!
            </p>
            {/*<img id='photo' class="slowFadeIn" src='./IMG_4657.jpg' alt='Me'></img>*/}
        </section>
    );
}

export default About;