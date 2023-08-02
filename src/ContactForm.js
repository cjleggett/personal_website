import React from 'react';
import './App.css';


class ContactForm extends React.Component {
  render (){
    return(
      <div id="form-contain">
        <h4>Let's get in touch!</h4>
        <p>Feel free to send me a message using the form below!</p>
        <br/>
      <div id="form" className="centered">
        <iframe title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSd3oqsda6DDEQcTEsjL3AFVDGqvouFjLxY3v16eFu8W_4XR_Q/viewform?embedded=true" width="640" height="838" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
      </div>
    )

  }
    
}

export default ContactForm;
