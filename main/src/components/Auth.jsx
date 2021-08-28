import React,{useContext} from 'react';
import firebase from 'firebase'

//Outside Comp
import '../style.scss';
import Fade from 'react-reveal/Fade';

import {ConfigContext} from "../GlobalContext"

const Auth = () =>{
    const Globalconfig = useContext(ConfigContext);
    return(
        <>
        <div style={Globalconfig.authenticatedStatus ? {display:"none"} : {displa:"block"}} id="AuthMain">
            <div id="AuthBox">
                <h1>Greetings, Goodyear Besties</h1>
                <br></br>
                <label>Username</label>
                <br></br>
                <input id="usernameBox" type="text"></input>
                
                <br></br>
                <br></br>

                <label>Password</label>
                <br></br>
                <input id="passwordBox" type="password"></input>

                <br></br>
                <br></br>
                <button id="loginbtn" onClick={()=>{
                    Globalconfig.setAuthenticated(false)
                    firebase.auth().signOut()
                    let username = document.getElementById("usernameBox")
                    let password = document.getElementById("passwordBox")

                    firebase.auth().signInWithEmailAndPassword(username.value,password.value).catch(error=>{
                        let errorCode = error.code
                        let errorMessage = error.message
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak. ' + "Error Code: " + errorCode);
                        } else {
                            alert("error code: " + errorCode + " " + errorMessage);
                        }
                    })

                    firebase.auth().onAuthStateChanged(user=>{
                        if(user){
                            Globalconfig.setAuthenticated(true)
                        }
                    })
                }}>Log In</button>
            </div>
        </div>
        </>
    )
}

export default Auth