import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import content from "../../Content.json";

const Result = () => {
    return (
        <p className="success-message">{content.contact.form.contactSendMessage}</p>
    );
};

function ContactForm() {
    const [result, setResult] = useState(false);
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('frankfurt.services', 'template_wmv8wec', form.current, 'vg5fM8f55LTFGGqqm')
          .then((result) => {
              console.log(result.text);
              setResult(true);
              setTimeout(() => {
                  setResult(false);
              }, 5000);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="rn-form-group">
                <label>Name</label>
                <input 
                type="text"
                name="user_name"
                required
                />
            </div>

            <div className="rn-form-group">
                <label>Email</label>
                <input 
                type="email"
                name="user_email"
                required
                />
            </div>

            <div className="rn-form-group">
                <label>Message</label>
                <textarea 
                name="message"
                required
                ></textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit">Send</button>
            </div> 

            {result && <Result />}
        </form>
    );
}

export default ContactForm;
