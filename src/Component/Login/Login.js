import React, { useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import logo2 from '../../images/logo2.png'

    firebase.initializeApp(firebaseConfig);


const Login = () => {

    // const [user, setUser] = useState(userInfo);

    const userInfo = {
        isLogedIn: false,
        name: '',
        email: '',
        password: '',
        conformPassword: ''

    };

    const handleChange = event =>{
        console.log(event.target.value);
        
    }

    const handleLogin = () =>{
        
        
    }

    

    return (
        <div className="signIn">
            <img src={logo2} alt=""/><br/>
            <input onBlur = {handleChange} name = "name" type="text" placeholder="Name"/> <br/>
            <input onBlur = {handleChange} name = "email" type="text" placeholder="Email"/> <br/>
            <input onBlur = {handleChange} name = "password" type="password" placeholder="Password"/> <br/>
            <input onBlur = {handleChange} name = "conformPassword" type="password" placeholder="conform Password"/> <br/>
            <button className="signIn-submitButton" onClick={handleLogin}>Sign in</button>
        </div>
    );
};

export default Login;