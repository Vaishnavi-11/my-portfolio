import React , { useEffect, useState } from 'react'
import { Link  } from 'react-scroll';

function Navbar(props) {
    const [opacity,setOpacity] = useState(0);
    const [active,setActive] = useState(false);

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

    const handleOpacity = () => {
        setOpacity(0.85)
    }

    useEffect(() => {
        if(active){
            handleOpacity()
        }
        if(!active){
            controlNavbar()
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [active])

    return (
        // <div className={`navbar ${opacity && 'navbar_display'}`}>
        <nav className="navbar" style={{opacity:opacity,visibility:opacity?"visible":"hidden"}}>
            <div className="navbar_content">
                <div className="nav_left">
                    <Link activeClass="active" to="hero" spy={true} offset={-100} duration={500}>
                        <h1>Vaishnavi<span>.</span></h1>
                    </Link>
                </div>
                <div className="nav_right">
                    <Link activeClass="active" to="about" spy={true} offset={-100} duration={500}>
                        About
                    </Link>
                    <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500}>
                        Skills
                    </Link>
                    <Link activeClass="active" to="projects" spy={true} offset={-100} duration={500}>
                        Projects
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} offset={-100} duration={500}>
                        Contact
                    </Link>
                    <a href={props.resume} target="_blank" id="resume" rel="noreferrer">Get Resume</a>
                </div>
                <div className="nav_right_mobile">
                    <div id="menuArea">
                        <input type="checkbox" id="menuToggle" onClick={() => setActive(!active)}></input>

                        <label htmlFor="menuToggle" className="menuOpen">
                            <div className="open" id={active?'open':null}></div>
                        </label>

                        <div className={`menu ${active?'menuEffects':'noMenuEffects'}`}>
                            <label htmlFor="menuToggle"></label>
                            <div className="menuContent">
                                <ul>
                                    <li><Link activeClass="active" to="about" spy={true} offset={-100} duration={500} onClick={() => setActive(!active)}>
                                        About
                                    </Link></li>
                                    <li><Link activeClass="active" to="skills" spy={true} offset={-100} duration={500} onClick={() => setActive(!active)}>
                                        Skills
                                    </Link></li>
                                    <li><Link activeClass="active" to="projects" spy={true} offset={-100} duration={500} onClick={() => setActive(!active)}>
                                        Projects
                                    </Link></li>
                                    <li><Link activeClass="active" to="contact" spy={true} offset={-100} duration={500} onClick={() => setActive(!active)}>
                                        Contact
                                    </Link></li>
                                    <li><a href={props.resume} target="_blank" id="resume" rel="noreferrer">Download CV</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
