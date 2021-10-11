// password authentication **
// Manage user to input user info **


import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import logo2 from '../../images/logo2.png'
import {userContext} from '../../App';
import {useHistory, useLocation} from "react-router-dom";

    firebase.initializeApp(firebaseConfig);


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isLogedIn: false,
        name: '',
        email: '',
        password: '',
        conformPassword: '',
        isValid: false,
        existingUser: false
    });
    
    // console.log(user);
    const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const hasNumber = input => /\d/.test(input);
    const samePass = (pass, conformPass) => { 
        // return pass === conformPass 
    };

    const haveAccount = () =>{
        const createdUser = {...user};
        createdUser.existingUser = true;
        setUser(createdUser);
    }

    const createAccount =() =>{
        const createdUser = {...user};
        createdUser.existingUser = false;
        setUser(createdUser);
    }

    const handleChange = event =>{
        const newUserInfo = {
            ...user
        }
        // perform validetion

        let isValid = true;
        // let password = '';
        
        if(event.target.name === "email"){
            isValid = (is_valid_email(event.target.value));
        }
        if(event.target.name === "password"){
            isValid = event.target.value.length >= 8 && hasNumber(event.target.value);
            // password = event.target.value;
        }

        if(event.target.name === "conformPassword"){
            // console.log(pass);
            // console.log(event.target.value === password);
        }

        newUserInfo[event.target.name] = event.target.value
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);
    }

    const creatAccount = (event) =>{
        if(user.isValid){
           firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
           .then(res =>{
               const createdUser = {...user};
               createdUser.isLogedIn = true;
               setUser(createdUser);
               updateUserInfo(user.name);
               setLoggedInUser(createdUser);
               history.replace(from);
            //    console.log(user, createdUser);
           })
           .catch(err =>{
               console.log(err.code);
               console.log(err.message);
               const createdUser = {...user};
               createdUser.errorMessate = err.message;
               setUser(createdUser);
           })
        }
        else{
            console.log("from is not valid..")
        }
        event.preventDefault();
        event.target.reset();
    }

    // console.log(user);

    const logInAccount = (event) =>{
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            console.log(res);
            const createdUser = {...user};
            createdUser.isLogedIn = true;
            createdUser.name = res.user.displayName;
            setUser(createdUser);
            setLoggedInUser(createdUser);
            history.replace(from);
        })
        .catch(err =>{
            console.log(err.code);
            console.log(err.message);
        })
     
        event.preventDefault();
        event.target.reset();
    }

    const signOut = () =>{
        console.log("clicked");
        firebase.auth().signOut()
        .then(res =>{
            const createdUser = {...user};
            // createdUser.isLogedIn = false;
            // createdUser.name = res.user.displayName;
            setUser(createdUser);
            setLoggedInUser(createdUser);
            // getDataKey(res.user.displayName);
            // history.replace(from);
            console.log(createdUser);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name
        }).then(() => {
            // console.log("name updated");
        }).catch((error) => {
        // An error occurred
        // ...
        });
    }



    return (
        <div className="signIn">
            <img src={logo2} alt="" height="100" width="100"/><br/>
            {
                // user.name && <h1>{user.name}</h1>
            }
            
            <form style={{display:user.existingUser ? 'none' : 'block'}} onSubmit = {creatAccount}>
            <input onBlur = {handleChange} name = "name" type="text" placeholder="Name" required/> <br/>
            <input onBlur = {handleChange} name = "email" type="text" placeholder="Email" required/> <br/>
            <input onBlur = {handleChange} name = "password" type="password" placeholder="Password" required/> <br/>
            <input onBlur = {handleChange} name = "conformPassword" type="password" placeholder="conform Password" required/> <br/>
            {
                loggedInUser.name === "" && <input className="signIn-submitButton" type="submit" value="Sign up"/>
            }
            
            </form>

            <form style={{display:user.existingUser ? 'block' : 'none'}} onSubmit = {logInAccount}>
            <input onBlur = {handleChange} name = "email" type="text" placeholder="Email" required/> <br/>
            <input onBlur = {handleChange} name = "password" type="password" placeholder="Password" required/> <br/>
            {
                loggedInUser.name === "" && <input className="signIn-submitButton" type="submit" value="Sign in"/>
            }
            </form>
            {
                loggedInUser.name && <button className="signOutButton" onClick= {signOut} >Sign Out</button>
            }

            <div style={{display:user.existingUser ? 'block' : 'none'}}>
                <br/>
                <button className="simple-button" onClick={createAccount}>Create a new account</button>
            </div>
            <div style={{display:user.existingUser ? 'none' : 'block'}}>
                <br/>
                <button onClick={haveAccount}>Already have an account</button>
            </div>

            {
                user.errorMessate && <p className="errorText">{user.errorMessate}</p>
            }
        </div>
    );
};

export default Login;