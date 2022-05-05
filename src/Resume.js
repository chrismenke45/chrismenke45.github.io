import { useRef } from "react";
import React from "react";

function Resume() {
    return (
        <main id="resume">
            {/*<embed type="application/pdf" src="Resume.pdf" width='850'  height='1100'></embed>*/}
            <object width="850" height="1100" type="application/pdf" data="Resume.pdf">
                <div id="resumeDownload">
                    <a href="Resume.pdf" download={true}>Download Resume</a>
                </div>

            </object>
        </main>
    );
}

export default Resume;