import React from 'react';
import Navigation from './Navigation';
import { Link } from "react-router-dom";
import './admin.css'
function Admin() {
    return <div className='ad'>
        <Navigation />
        <form className='f1'>
            <h3 className='a3'>Log In</h3>
            <div className='inputBox'>
                <span className='sp1'>UserName</span>
                <div className='box1'>
                    <div className='icon1'></div>
                    <input className='p1' type="text"></input>

                </div>
            </div>
            <div className='inputBox'>
                <span className='sp1'>Password</span>
                <div className='box1'>
                    <div className='icon1'></div>
                    <input className='p1' type="password" ></input>
                </div>
            </div>

            <div className='inputBox'>

                <div className='box1'>
                    <div className='icon1'></div>
                    <input className='lg' type="submit" value="Log In" ></input>
                </div>
            </div>
            <a href='#' className='nsit'>Forget Password</a>

        </form>

    </div>;
}

export default Admin;

