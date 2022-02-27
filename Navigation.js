import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (<
        div className="navigation" >

        <NavLink exact to="/admin"
            activeClassName="nav-active" >
            admin
        </NavLink>


        <NavLink exact to="/"
            activeClassName="nav-active" >
            Home
        </NavLink>


        <NavLink exact to="/"
            activeClassName="nav-active" >
            About
        </NavLink>



        <NavLink exact to="/Contact"
            activeClassName="nav-active" >
            Contact
        </NavLink>



        <
            NavLink exact to="/a-propos"
            activeClassName="nav-active" >
            À propos </NavLink>
    </div >
    );
};

export default Navigation;