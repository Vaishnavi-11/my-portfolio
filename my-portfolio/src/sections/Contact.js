import React from 'react'

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact_heading">
                <p></p>
                <h2>Contact Me</h2>
            </div>
            <div className="contact_content">
                <div className="contact_links">
                    <div className="link">
                        <a href="https://www.linkedin.com/in/vaishnavi-nagaraj-3a96541a0/" target="_blank" rel="noreferrer" style={{color:'#0077b5'}}>
                            <i className="fa fa-linkedin"></i>
                            <p>LinkedIn</p>
                        </a>
                        </div>
                    <div className="link">
                        <a href="https://www.instagram.com/_vaishnavi91_/" target="_blank" rel="noreferrer" style={{color:'#8a3ab9'}}>
                            <i className="fa fa-instagram"></i>
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="https://m.facebook.com/vaishnavi.nagaraj.3" target="_blank" rel="noreferrer" style={{color:'#4267B2'}}>
                            <i className="fa fa-facebook-f"></i>
                            <p>Facebook</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="https://api.WhatsApp.com/send?phone=+917338138669" target="_blank" rel="noreferrer" style={{color:'#075E54'}}>
                            <i className="fa fa-whatsapp"></i>
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>
                <div className="contact_location">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.519183836754!2d77.54833731464412!3d12.874301990919772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzI3LjUiTiA3N8KwMzMnMDEuOSJF!5e0!3m2!1sen!2sin!4v1628358460710!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact_form">
                    <form id="contact-form" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value=""  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value=""  />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact
   