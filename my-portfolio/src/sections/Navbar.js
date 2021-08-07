import React from 'react'
import { data } from '../data'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_content">
                <div className="nav_left">
                    <h1>Vaishnavi<span>.</span></h1>
                </div>
                <div className="nav_right">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href={data.resume} target="_blank" id="resume">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
