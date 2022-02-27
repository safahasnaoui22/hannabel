import React from "react";
import { Link } from "react-router-dom";
import './navigation.scss'


const Navigation = () => {
    return (


        <
            div className="navigation" >


            <li>

                <Link exact to="/admin"
                    activeClassName="nav-active" >
                    Admin
                </Link></li>

            <li><Link exact to="/"
                activeClassName="nav-active" >
                Home
            </Link></li>




            <li>

                <Link exact to="/Inscription"
                    activeClassName="nav-active" >
                    Inscription
                </Link></li>

            <li>
                <Link exact to="/Contact"
                    activeClassName="nav-active" >
                    Contact
                </Link>

            </li>

            <li>

                <Link exact to="/About"
                    activeClassName="nav-active" >
                    Courses
                </Link>
            </li>



        </div >
    );
};

export default Navigation;
