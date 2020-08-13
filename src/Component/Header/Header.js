import React from 'react';
import logo2 from '../../images/logo2.png';
import './Header.css'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <Navbar>
                <img className="logo2" src={logo2} alt=""/>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <div className="login-signUp">
                        <a href="">Login</a>
                        <a className="redButton" href="">Sign up</a>
                    </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <section className="bannerbackground">
                <h1>Best food waiting for you.</h1>
                <input className="searchBox" placeholder="Scarce food items" type="text" />
                <button className="redButton">Scarch</button>
            </section>
        </div>
    );
};

export default Header;