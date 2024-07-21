// src/components/ContactList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('/api/contacts')
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the contacts!", error);
            });
    }, []);

    return (
        <div>
<h2>Contact Information</h2>
            <h3>Treneese Johnson</h3>
            <p> I cant wait to hear from you</p>
            <p>"Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently." - Maya Angelou</p>
            <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>
                        <button className="icon-button" onClick={() => window.location.href = `mailto:${contact.email}`}>
                            <i className="fas fa-envelope"></i>
                        </button>
                    </p>
                    <p>
                        <button className="icon-button" onClick={() => window.open(contact.linkedin, '_blank', 'noopener,noreferrer')}>
                            <i className="fab fa-linkedin"></i>
                        </button>
                    </p>
                    <p>
                        <button className="icon-button" onClick={() => window.open(contact.github, '_blank', 'noopener,noreferrer')}>
                            <i className="fab fa-github"></i>
                        </button>
                    </p>
                    <p>
                        <button className="icon-button" onClick={() => window.open(contact.blog, '_blank', 'noopener,noreferrer')}>
                            <i className="fas fa-blog"></i>
                        </button>
                    </p>
                </li>
            ))}
        </ul>
            <p>Thank You for your time!</p>
        </div>
    );
};

export default ContactList;
