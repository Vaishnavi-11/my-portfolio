import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_back">
                <div className="backtotop">
                    <Link activeClass="active" to="hero" spy={true} offset={-100} duration={500}>
                        {/* <a href="#about">About</a> */}
                        <i className="fa fa-chevron-up"></i>
                    </Link>
                </div>
            </div>
            <div className="footer_content">
                <div className="footer_links">
                    <div className="footer_links_content">
                        <Link activeClass="active" to="about" spy={true} offset={-100} duration={500}>
                            {/* <a href="#about">About</a> */}
                            About
                        </Link>|
                        <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500}>
                            {/* <a href="#about">About</a> */}
                            Skills
                        </Link>|
                        <Link activeClass="active" to="projects" spy={true} offset={-100} duration={500}>
                            {/* <a href="#about">About</a> */}
                            Projects
                        </Link>|
                        <Link activeClass="active" to="contact" spy={true} offset={-100} duration={500}>
                            {/* <a href="#about">About</a> */}
                            Contact
                        </Link>
                        {/* <a href="#about">About</a>|
                        <a href="#skills">Skills</a>|
                        <a href="#projects">Projects</a>|
                        <a href="#contact">Contact</a> */}
                    </div>
                </div>
                <div className="footer_contact">
                    <div className="footer_contact_content">
                        <a href="https://www.linkedin.com/in/vaishnavi-nagaraj-3a96541a0/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/_vaishnavi91_/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://m.facebook.com/vaishnavi.nagaraj.3" target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                        <a href="https://api.WhatsApp.com/send?phone=+917338138669" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a>
                    </div>
                </div>
                <div className="footer_copyrights">
                    <div className="footer_copyrights_content">
                        <p>&copy; 2021 Vaishnavi N</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
