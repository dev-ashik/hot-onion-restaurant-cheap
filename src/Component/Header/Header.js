import React, { useState } from 'react';
import logo2 from '../../images/logo2.png';
import './Header.css'
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import Breakfast from '../../fakedata/Fakefood'
// import lunchMenu from '../../fakedata/Lunch'
// import Dinner from '../../fakedata/Dinner'
// import Home from '../Home/Home';
// import Foodmenu from '../Foodmenu/Foodmenu';
// import BreakfastMenu from '../../fakedata/Breakfast';

const Header = () => {
    

    

    return (
        <div>
            <Navbar>
                <img className="logo2" src={logo2} alt=""/>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <div className="login-signUp">
                        <Link to="/">Foods</Link>
                        <Link to="/login">Login</Link>
                        <Link className="redButton" style = {{color: "white"}} to="/login">Sign up</Link>
                    </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <section className="bannerbackground">
                <div className="poster_content">
                    <h1>Best food waiting for you.</h1>
                    <div className="searchBox">
                        <input className="searchInputBox" placeholder="Scarce food items" type="text" />
                        <button className="redButton">Scarch</button>
                    </div>
                </div>
            </section>
            

        </div>
    );
};

export default Header;