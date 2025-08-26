import { useState } from "react";

export default function Contact() {
//State variable for the confirmation message
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); // 👈 This is crucial! It stops the page from reloading
    console.log("submitting contact form");
    setSubmissionMessage('Thank you for your message! It has been submitted.');
    
    //clear the form fields after submission
    event.target.reset(); 
  };

  return (
    <section className="Contact Me">
      <h2>Contact</h2>
      <div id="Contact">
        <form id="contactForm" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="first-name" />
          
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="Message" rows="3" cols="30"></textarea>
          
          <input type="submit" value="submit" />
        </form>
        {submissionMessage && <p className="confirmation-message">{submissionMessage}</p>}
      </div>

      <div className="contactLinks">
        <a href="https://www.linkedin.com/in/elijah-reed-0b0b42351/" target="_blank" rel="noopener noreferrer">
          <img src="\images\LI-In-Bug.png" 
          alt="LinkedIn Profile" />
        </a>
        <a href="https://github.com/InfamousEli02" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub Profile" />
        </a>
      </div>
    </section>
  );
};