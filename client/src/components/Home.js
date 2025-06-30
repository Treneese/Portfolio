// src/components/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

  

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
      axios.get('https://treneese-engineer-portfolio-backend.vercel.app/api/contacts')
          .then(response => {
              setContacts(response.data);
          })
          .catch(error => {
              console.error("There was an error fetching the contacts!", error);
          });
  }, []);
  return (
  <div>
            <h3>Building the Future with Code & Culture</h3>
            <h1>Treneese Johnson</h1>
            <h1>And I am a </h1>
            <p>Creative Technologist • Software Developer • Aspiring Cybersecurity Pro</p>
            <p>"Success is liking yourself, liking what you do, and liking how you do it.”- Maya Angelou</p>
            <img src='/profile.png'  alt='Profile' className="profile-image" />
            <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                        <button className="icon-button" onClick={() => window.location.href = `mailto:${contact.email}`}>
                            <i className="fas fa-envelope"></i>
                        </button>
                   
                        <button className="icon-button" onClick={() => window.open(contact.linkedin, '_blank', 'noopener,noreferrer')}>
                            <i className="fab fa-linkedin"></i>
                        </button>
                   
                        <button className="icon-button" onClick={() => window.open(contact.github, '_blank', 'noopener,noreferrer')}>
                            <i className="fab fa-github"></i>
                        </button>
                   
                        <button className="icon-button" onClick={() => window.open(contact.blog, '_blank', 'noopener,noreferrer')}>
                            <i className="fas fa-blog"></i>
                        </button>
                        </li>
            ))}
        </ul>  
 </div>
  )
};

export default Home;
