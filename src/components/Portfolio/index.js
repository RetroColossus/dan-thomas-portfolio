import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'hobby-central',
            description: 'MySQL/Express/Handlebars/SASS',
            link: "https://hobby-central.herokuapp.com/",
            repo: "https://github.com/RetroColossus/Hobby-Central"
        },
        
       
        {
            name: 'tech-blog',
            description: 'Node/MySQL/Sequalize',
            link: "https://tech-blog-retro.herokuapp.com/",
            repo: "https://github.com/sylviaprabudy/tech-blog"
        },
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://retrocolossus.github.io/Weather-Dashboard/",
            repo: "https://github.com/RetroColossus/Weather-Dashboard"
        },
       
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://retrocolossus.github.io/password-generator/index.html",
            repo: "https://github.com/RetroColossus/password-generator"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://note-taker-retro.herokuapp.com/",
            repo: "https://github.com/RetroColossus/Note-Taker"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://retrocolossus.github.io/Work-Day-Scheduler",
            repo: "https://github.com/RetroColossus/Work-Day-Scheduler"
        },
      
        {
            name: 'movie-central',
            description: 'MERN Stack',
            link: "https://movie-central-retro.herokuapp.com//",
            repo: "https://github.com/RetroColossus/movie-central"
        }
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
