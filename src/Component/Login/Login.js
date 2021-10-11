import React, { useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import logo2 from '../../images/logo2.png'

    firebase.initializeApp(firebaseConfig);


const Login = () => {
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
            setUser(createdUser);
        })
        .catch(err =>{
            console.log(err.code);
            console.log(err.message);
        })
     
        event.preventDefault();
        event.target.reset();
    }

    const signOut = () =>{
        firebase.auth().signOut()
        .then(action =>{
            // sign-out successful.
        })
        .catch(err =>{
            //an error hppend.
        })
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name
    }).then(() => {
    // Update successful
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });
    }

    return (
        <div className="signIn">
            <img src={logo2} alt="" height="100" width="100"/><br/>
            {
                user.name && <h1>{user.name}</h1>
            }
            
            <form style={{display:user.existingUser ? 'none' : 'block'}} onSubmit = {creatAccount}>
            <input onBlur = {handleChange} name = "name" type="text" placeholder="Name" required/> <br/>
            <input onBlur = {handleChange} name = "email" type="text" placeholder="Email" required/> <br/>
            <input onBlur = {handleChange} name = "password" type="password" placeholder="Password" required/> <br/>
            <input onBlur = {handleChange} name = "conformPassword" type="password" placeholder="conform Password" required/> <br/>
            {
                user.isLogedIn ? <input className="signIn-submitButton" onSubmit = {signOut} type="submit" value="Sign Out"/> : <input className="signIn-submitButton" type="submit" value="Sign up"/>
            }
            <br/>
            <button onClick={haveAccount}>Already have an account</button>
            </form>

            <form style={{display:user.existingUser ? 'block' : 'none'}} onSubmit = {logInAccount}>
            <input onBlur = {handleChange} name = "email" type="text" placeholder="Email" required/> <br/>
            <input onBlur = {handleChange} name = "password" type="password" placeholder="Password" required/> <br/>
            <input className="signIn-submitButton" type="submit" value="Sign in"/>
            <br/>
            <button className="simple-button" onClick={createAccount}>Create a new account</button>
            </form>
            {
                user.errorMessate && <p className="errorText">{user.errorMessate}</p>
            }
        </div>
    );
};

export default Login;