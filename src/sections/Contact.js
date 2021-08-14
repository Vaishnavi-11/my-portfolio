import React from 'react'
import ContactForm from "../sections/ContactForm";

function Contact(props) {
    return (
        <div className="contact" id="contact">
            <div className="contact_heading">
                <p></p>
                <h2>Contact Me</h2>
            </div>
            <div className="contact_content">
                <div className="contact_links">
                    <div className="link">
                        <a href={props.links.linkedin} target="_blank" rel="noreferrer" style={{color:'#0077b5'}}>
                            <i className="fa fa-linkedin"></i>
                            <p>LinkedIn</p>
                        </a>
                        </div>
                    <div className="link">
                        <a href={props.links.instagram} target="_blank" rel="noreferrer" style={{color:'#8a3ab9'}}>
                            <i className="fa fa-instagram"></i>
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href={props.links.facebook} target="_blank" rel="noreferrer" style={{color:'#4267B2'}}>
                            <i className="fa fa-facebook-f"></i>
                            <p>Facebook</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href={props.links.whatsapp} target="_blank" rel="noreferrer" style={{color:'#075E54'}}>
                            <i className="fa fa-whatsapp"></i>
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>
                <div className="contact_location">
                    <iframe title="map" src={props.location} style={{border:0}} loading="lazy"></iframe>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}


export default Contact
   