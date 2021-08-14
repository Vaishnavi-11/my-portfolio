import React from 'react'
import ProjectCard from '../sections/ProjectCard'
import { data } from '../data'

function Projects() {
    return (
        <div id="projects" className="projects">
            <div className="project_heading">
                <p></p>
                <h2>My Projects</h2>
            </div>
            <div className="project_content">
                {
                    data.projects.map((project) => {
                        return <div style={{display:'inline-block'}} key={project.id}>
                            <ProjectCard project={project}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Projects
