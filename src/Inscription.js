import { useState } from "react";
import { db } from './firebase';
import './inscri.css'
import Navigation from './Navigation';
function Inscription() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cin, setCin] = useState("");
    const [date, setDate] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('inscription').add({
            name: name,
            email: email,
            phone: phone,
            password: password,
            cin: cin,
            date: date
        })
            .then(() => {
                alert('all done !');
            })
            .catch(error => {
                alert(error.message);
            });


        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setCin('');
        setDate('');
    }
    function validation() {
        var name = document.forms["RegForm"]["name"];
        var email = document.forms["RegForm"]["email"];
        var phone = document.forms["RegForm"]["phone"];

        var password = document.forms["RegForm"]["password"];
        var cin = document.forms["RegForm"]["Cin"];


        if (name.value == "") {
            alert("enter your name.");
            name.focus();
            return false;
        }
        if (email.value == "") {
            alert("enter your adress mail.");
            email.focus();
            return false;
        }
        if (email.value.indexOf("@", 0) < 0) {
            alert("enter your adress mail.");
            email.focus();
            return false;
        }
        if (email.value.indexOf(".", 0) < 0) {
            alert("enter your adress mail.");
            email.focus();
            return false;
        }
        if (phone.value == "") {
            alert("enter your phone number.");
            phone.focus();
            return false;
        }
        if (password.value == "") {
            alert("enter your password");
            password.focus();
            return false;
        }
        if (cin.selectedIndex < 1) {
            alert("enter your cin cart.");
            cin.focus();
            return false;
        }

        return true;

    }
    return (
        <div className="Inscription" id="Inscription">

            <Navigation />

            <main className='page'>
                <section className='contact-container'>
                    <article className='contact-info'>
                        <h3 className="h3" >want to get in touche </h3>
                        <p>Lorem, ipsum dolocupiditate harum at autem voluptates nesciunt minima.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque assumenda doloribus accusamus!</p>
                    </article>
                    <article>
                        <form className='form contact-form' id="form" name="RegForm" onSubmit={handleSubmit} >

                            <div className="from-row">
                                <label for="name" className="from-label">Name</label>
                                <input type="text" id="name" className="form-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

                                    required />
                            </div>


                            <div className="from-row">
                                <label for="email" className="from-label">Email</label>
                                <input type="email" id="email" className="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="from-row">
                                <label for="number" class="from-label">Phone</label>
                                <input type="number" id="phone" className="form-input"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                            <div className="from-row">
                                <label for="password" className="from-label">Password</label>
                                <input type="password" id="password" className="form-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="from-row">
                                <label for="text" className="from-label">Confirm-password</label>
                                <input type="password" className="form-input" required />
                            </div>
                            <div className="from-row">
                                <label for="cin" className="from-label">Cin</label>
                                <input type="number" id="cin" className="form-input"
                                    value={cin}
                                    onChange={(e) => setCin(e.target.value)} required />
                            </div>
                            <div className="from-row">
                                <label for="number" className="from-label">Date-of-birth</label>
                                <input type="date" className="form-input"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} />
                            </div>


                            <button type="submit" className="btn btn-block" value="Validate">submit
                            </button>

                        </form>
                    </article>
                </section>

            </main>


        </div >
    )
}

export default Inscription
