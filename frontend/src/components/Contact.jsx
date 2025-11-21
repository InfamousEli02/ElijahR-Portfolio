import { useState } from "react";

export default function Contact() {
//State variable for the confirmation message
  // const [submissionMessage, setSubmissionMessage] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleFormSubmit = (event) => {
  //   event.preventDefault(); // 👈 This is crucial! It stops the page from reloading
  //   console.log("submitting contact form");
  //   setSubmissionMessage('Thank you for your message! It has been submitted.');
    
  //   //clear the form fields after submission
  //   event.target.reset(); 
  // };

  return (
    <section className="Contact Me">
      <h2>Contact</h2>
      {/* FUNCTIONAL CONTACT FORM WORK IN PRGRESS */}
      {/* <div id="Contact">
        <form id="contactForm" method="POST" action="mailto:ejreed328@gmail.com" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="first-name" />
          
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="Message" rows="3" cols="30"></textarea>
          
          <input type="submit" value="submit" />
        </form>
        {submissionMessage && <p className="confirmation-message">{submissionMessage}</p>}
      </div> */}

      {/* <div className="contactForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          value={message}
          rows="3" 
          cols="30"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      
        <a href="mailto:ejreed328@gmail.com" className="submit-button">Send</a>
      </div> */}

      <p>Below are links to ways you can reach out to me. I will try to respond as soon
        I can.</p>
      <div className="contactLinks">
        <a href="mailto:ejreed328@gmail.com"target="_blank"  rel="noopener noreferrer">
          <img src="/images/mail.png" 
          alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/elijah-reed-0b0b42351/" target="_blank" rel="noopener noreferrer">
          <img src="/images/LI-In-Bug.png" 
          alt="LinkedIn Profile" />
        </a>
        <a href="https://github.com/InfamousEli02" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub Profile" />
        </a>
      </div>
      <div className="linksCredit">
        <p>Credit for these icons belong to:</p>
        <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
        <a href="https://brand.linkedin.com/downloads" title="linkedin logos">LinkedIn logo provided by LinkedIn</a>
        <a href="https://github.com/logos" title="github logos">Github logos provided by Github</a>
        
      </div>
    </section>
  );
};