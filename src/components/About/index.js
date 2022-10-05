import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am an aspiring back-end developer with a passion for JavaScript. I recently earned a Certificate in Full Stack Web Development from the University of NC at Charlotte, where I developed skills in MERN Stack and SQL Server.</p>
                       
                        <p className="text-faded mb-5">My problem-solving abilities allow me to adapt and learn quickly so that I can keep any project rolling along smoothly.
                         I have a strong attention to detail and my ability to work with others is second to none.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About