import React from 'react';
import './App.css';


class ContactForm extends React.Component {
  render (){
    const email_link = <a href="mailto:cjleggett@college.harvard.edu">cjleggett@college.harvard.edu</a>
    return(
      <div id="form-contain">
        <h4>Let's get in touch!</h4>
        <ul>
          <li>Option 1: Email me at {email_link}</li>
          <li>Option 2: Fill out the form below:</li>
        </ul>
        <br/>
      <div id="form" className="centered">
        <iframe title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSd3oqsda6DDEQcTEsjL3AFVDGqvouFjLxY3v16eFu8W_4XR_Q/viewform?embedded=true" width="640" height="838" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
      </div>
    )

  }
    
}

export default ContactForm;
