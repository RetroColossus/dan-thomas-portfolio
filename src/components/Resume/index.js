import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Pdf from "../../assets/img/DanThomas_Resume.pdf";

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    return (
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <h3>Front-end Experience</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>SASS</li>
                            <li>WordPress</li>
                        </ul>
                        <h3>Back-end Experience</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>

                            <li>MERN Stack</li>
                        </ul>
                        <h3>Additional Skills</h3>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Articulate</li>
                            
                        </ul>
                        <p className="text-center">
                            Download my <a href={Pdf} className="text-faded white-link" download>resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
