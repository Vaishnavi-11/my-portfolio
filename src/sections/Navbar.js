import React , { useEffect, useState } from 'react'
import { Link  } from 'react-scroll';

function Navbar(props) {
    const [opacity,setOpacity] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY < 100) {
            setOpacity(0)
        } else if (window.scrollY > 100 && window.scrollY < 200){
            setOpacity(0.3)
        }else if (window.scrollY > 200 && window.scrollY < 300){
            setOpacity(0.5)
        }else if (window.scrollY > 300 && window.scrollY < 400){
            setOpacity(0.8)
        }else {
            setOpacity(1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        // <div className={`navbar ${opacity && 'navbar_display'}`}>
        <div className="navbar" style={{opacity:opacity,visibility:opacity?"visible":"hidden"}}>
            <div className="navbar_content">
                <div className="nav_left">
                    <Link activeClass="active" to="hero" spy={true} offset={-100} duration={500}>
                        <h1>Vaishnavi<span>.</span></h1>
                    </Link>
                </div>
                <div className="nav_right">
                    <Link activeClass="active" to="about" spy={true} offset={-100} duration={500}>
                        {/* <a href="#about">About</a> */}
                        About
                    </Link>
                    <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500}>
                        {/* <a href="#about">About</a> */}
                        Skills
                    </Link>
                    <Link activeClass="active" to="projects" spy={true} offset={-100} duration={500}>
                        {/* <a href="#about">About</a> */}
                        Projects
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} offset={-100} duration={500}>
                        {/* <a href="#about">About</a> */}
                        Contact
                    </Link>
                    <a href={props.resume} target="_blank" id="resume" rel="noreferrer">Get CV</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
