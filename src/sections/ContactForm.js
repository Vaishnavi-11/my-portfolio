import React, {useState} from 'react'
import emailjs from 'emailjs-com';

function ContactForm() {
    const [status,setStatus] = useState("Submit");
    function handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = e.target.elements;
        console.log(name.value,email.value,message.value)
        setStatus("Submitting...");
        emailjs.sendForm('service_fmpav6w', 'template_l5nbeer', e.target, process.env.REACT_APP_USERID)
            .then((result) => {
                console.log(result.text);
                setStatus("Submitted!");
                setTimeout(() => {
                    setStatus("Submit");
                }, 2000);
            }, (error) => {
                console.log(error.text);
                setStatus("Error!");
                setTimeout(() => {
                    setStatus("Submit");
                }, 2000);
            });
        e.target.reset();
    }

    return (
        <div className="contact_form_content">
            <form className="contact_form" id="contact_form" onSubmit={ handleSubmit }>
                <div className="form_group">
                    <label htmlFor="name">*</label>
                    <input type="text" name="name" className="form_control"  placeholder="Name" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="email">*</label>
                    <input type="email" name="email" className="form_control" aria-describedby="emailHelp" placeholder="Email ID" required/>
                </div>
                <div className="form_group">
                    <label htmlFor="message">*</label>
                    <textarea className="form_control" name="message" rows="10" placeholder="Message" required/>
                </div>
                <button type="submit" className="submit_form">{status}</button>
            </form>
        </div>
    )
}

export default ContactForm
