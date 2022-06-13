import React from 'react'
import { Link } from 'react-scroll'

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer_back">
                <div className="backtotop">
                    <Link activeClass="active" to="hero" spy={true} offset={-100} duration={500}>
                        <i className="fa fa-chevron-up"></i>
                    </Link>
                </div>
            </div>
            <div className="footer_content">
                <div className="footer_links">
                    <div className="footer_links_content">
                        <Link activeClass="active" to="about" spy={true} offset={-100} duration={500}>
                            About
                        </Link>|
                        <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500}>
                            Skills
                        </Link>|
                        <Link activeClass="active" to="projects" spy={true} offset={-100} duration={500}>
                            Projects
                        </Link>|
                        <Link activeClass="active" to="contact" spy={true} offset={-100} duration={500}>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="footer_contact">
                    <div className="footer_contact_content">
                        <a href={props.data.links.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href={props.data.links.instagram} target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href={props.data.links.facebbook} target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                        <a href={props.data.links.github} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                    </div>
                </div>
                <div className="footer_copyrights">
                    <div className="footer_copyrights_content">
                        <p>&copy; 2022 Vaishnavi N</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
