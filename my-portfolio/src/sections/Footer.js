import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_back">
                <div className="backtotop">
                    <a href="#hero"><i className="fa fa-chevron-up"></i></a>
                </div>
            </div>
            <div className="footer_content">
                <div className="footer_links">
                    <div className="footer_links_content">
                        <a href="#about">About</a>|
                        <a href="#skills">Skills</a>|
                        <a href="#projects">Projects</a>|
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer_contact">
                    <div className="footer_contact_content">
                        <a href="#about"><i className="fa fa-linkedin"></i></a>
                        <a href="#skills"><i className="fa fa-instagram"></i></a>
                        <a href="#projects"><i className="fa fa-facebook-f"></i></a>
                        <a href="#contact"><i className="fa fa-whatsapp"></i></a>
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
