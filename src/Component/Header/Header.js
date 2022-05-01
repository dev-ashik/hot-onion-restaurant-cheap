import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import { Navbar } from "react-bootstrap";
import logo2 from "../../images/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [loggedInUser] = useContext(userContext);

  return (
    <div>
      <Navbar className="navber">
        <img className="logo2" src={logo2} alt="" />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="login-signUp">
              <Link to="/">Foods</Link>
              <Link to="/addfood">Add Foods</Link>
              <Link to="/login">Login</Link>
              <Link className="userName">{loggedInUser.name}</Link>
              <Link
                className="redButton"
                style={{ color: "white" }}
                to="/login"
              >
                Sign up
              </Link>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <section className="bannerbackground">
        <div className="poster_content">
          <h1>Best food waiting for you.</h1>
          <div className="searchBox">
            <input
              className="searchInputBox"
              placeholder="Scarce food items"
              type="text"
            />
            <button className="redButton">Scarch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
