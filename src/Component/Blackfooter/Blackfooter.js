import React from 'react';
import './Blackfooter.css'
import logo from '../../images/logo.png'

const Blackfooter = () => {
    return (
        <div className="black-footer">
            
            <div className="row">
                <div className="col-md-6">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-3 footer-textColor">
                    <p>About Online food <br/>Read our blog <br/>Sign up to deliver</p>
                </div>
                <div className="col-md-2 footer-textColor">
                    <p>Cet help <br/>Read FAPs <br/>View all cities br Restaurants near me</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-7 grayColor">
                    <small>Copyright &#169; 2020 Online food</small>
                </div>
                <div className="col-md-2 footer-textColor">
                    <p>Privacy Policy.</p>
                </div>
                <div className="col-md-2 footer-textColor">
                    <p>Terms of Use</p>
                </div>
                <div className="col-md-1 footer-textColor">
                    <p>Pricing</p>
                </div>
            </div>
           
        </div>
    );
};

export default Blackfooter;