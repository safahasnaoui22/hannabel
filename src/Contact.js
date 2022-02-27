import React from 'react';
import './contact.css'
import { useState } from "react";
import { db } from './firebase'
import Navigation from "./Navigation";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contact').add({
            email: email,
            message: message,
            name: name,
            phone: phone,

        })
            .then(() => {
                alert(' thanks i will replay when  see ur message !');
            })
            .catch(error => {
                alert(error.message);
            });


        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }





    return <div className='Contact' id='Contact'>
        <Navigation />
        <form className="contact-form" onSubmit={handleSubmit} >

            <h2 > contact us </h2>
            <div className="form-content" >

                <input type="text"
                    id="name"
                    name="name"
                    placeholder="name "
                    value={name}
                    onChange={(e) => setName(e.target.value)}


                />


                <input type="text"
                    id="phone"
                    name="phone"
                    placeholder="phone "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />





                <div className="email-content" >

                    <label id="not-mail" > Email non valide </label> <
                        input type="mail"
                        id="email"
                        name="email"

                        placeholder="email "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                < textarea id="message"
                    name="message"

                    placeholder="message "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div><input className="ggg"
                    type="submit"
                    value="Envoyer"
                    onSubmit={handleSubmit}
                /></div>

                <div className="form-message" ></div>
            </div>
        </form >
    </div>;
}

export default Contact;
