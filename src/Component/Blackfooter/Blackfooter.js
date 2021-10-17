import React from 'react';
import './Blackfooter.css'
import logo from '../../images/logo.png'

const Blackfooter = () => {
    return (
        <div className="black-footer">
            
            <div className="row rowUp">
                <div className="col-md-6 logoImage">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-3 col-sm-3 footer-textColor firstArea">
                    <p className="text">About Online food</p>
                    <p className="text">Read our blog</p>
                    <p className="text">Sign up to deliver</p>
                    <p className="text">Add your restaurant</p>
                </div>
                <div className="col-md-2 footer-textColor secondArea">
                    <p className="text">Cet help</p>
                    <p className="text">Read FAPs</p>
                    <p className="text">View all cities</p>
                    <p className="text">Restaurants near me</p>
                </div>
            </div>

            <div className="row ">
                <div className="col-md-7 grayColor footerCopy">
                    <small>Copyright &#169; 2020 Online food</small>
                </div>
                <div className="col-md-2 footer-textColor policy">
                    <p className="text">Privacy Policy.</p>
                </div>
                <div className="col-md-2 footer-textColor terms">
                    <p className="text">Terms of Use</p>
                </div>
                <div className="col-md-1 footer-textColor pricing">
                    <p className="text">Pricing</p>
                </div>
            </div>
           
        </div>
    );
};

export default Blackfooter;