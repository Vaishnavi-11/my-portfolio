import React from 'react'
import { useState } from 'react'
import { data } from '../data'

function Hero() {
    const [buttonValue, setButtonValue] = useState("vaishnavinagaraj790@gmail.com");

    const mouseClick = (e) => {
        setButtonValue("Copied!");
        navigator.clipboard.writeText(data.email);
    }

    const hoverIn = (e) => {
        setButtonValue("Click to Copy");
    }

    const hoverOut = (e) => {
        setButtonValue(data.email);
    }

    return (
        <div>
            <div id="hero" className="hero">
                <div className="hero_top"></div>
                <div className="hero_content">
                    <div className="hero_text">
                        <h1>I'm<br/>{data.name}</h1>
                        <h3>{ data.role }</h3>
                        <p>{ data.short_about }</p>
                        <button className="copyEmail" onMouseEnter={hoverIn} onMouseLeave={hoverOut} onClick={mouseClick }><i className="fa fa-envelope"/>{buttonValue}</button>
                    </div>
                    <div className="hero_img">
                        <img src={ data.image } alt="my-picture" />
                    </div>
                </div>
                <div className="hero_bottom"></div>
            </div>
            <div className="scroll">
                <p>scroll down</p>
                <i className="fa fa-arrow-down"/>
            </div>
        </div>
    )
}

export default Hero
