// src/components/ContactList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

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
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>Email: {contact.email}</p>
                        <p>LinkedIn: <a href={contact.linkedin}>{contact.linkedin}</a></p>
                        <p>GitHub: <a href={contact.github}>{contact.github}</a></p>
                        <p>Blog: <a href={contact.blog}>{contact.blog}</a></p>
                    </li>
                ))}
            </ul>
            <p>Thank You for your time!</p>
        </div>
    );
};

export default ContactList;
