import React from "react";

function Home() {
    return (
        <div id="home">
            <h1>Hi, I'm Chris!</h1>
            <img id='photo' className="fadeIn" src='./IMG_4657.jpg' alt='Me'></img>
            <p>I'm a web developer with experience building websites with HTML, CSS, JavaScript, React, Node.js and MongoDB. I have also started to learn Ruby on Rails and SQL. I’m looking to gain more professional experience. Please checkout my projects and <a href="Resume.pdf" download={true}>resume</a>.  Reach out to me if you think I’d be the right fit for you!</p>
        </div>
    );
}

export default Home;