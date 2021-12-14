import "./signin.css";
import React, {useRef, useState} from "react";
import {auth} from '../../config/Firebase-config'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";




export const SignIn = () => {

  const emailRef = useRef(null);
  const psdRef = useRef(null);
  const [errorMessage , setErrorMessage] = useState("");
  const history = new useHistory();

  const onSubmit = e =>{
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth,emailRef.current.value,psdRef.current.value)
    .then(e => history.push("/"))
    .catch(error =>{
      const errorCode = error.code.split("auth/")[1];
      setErrorMessage(errorCode);
      console.log(errorCode);
    })

  }

 

 const SignInWithGoogle =() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(e => history.push("/"))
    .catch((err)=>{
      console.log(err)
    })
  }

const  SignInWithFacebook =() => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then(e => history.push("/"))
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
       <div class="login" id="login">
          <div class="LoginOverlay">
            <div class="logincontainer">
              <div class="form-login">
                <form action="" onSubmit="">
                  <div class="formWord-login">
                  {errorMessage !== "" ? <div className="Error">{errorMessage.toUpperCase()}</div>: null}
                    <span>Enter Email</span>
                    <br />
                    <input class="input100" type="text" ref={emailRef}  required />
                    <br />
                    <span>Enter Password</span>
                    <br />
                    <input
                      class="input100"
                      type="password"
                      ref={psdRef}
                      required
                    />
                    <br />
                    <button className="loginbtn" onClick={onSubmit} >Login</button>
                    <br />
                    <br />
                    <a href="/signup">New User? Click Here</a>
                  </div>
                </form>
                <div>
                <p><button className="facebook-loginbtn" onClick={SignInWithFacebook} >Sign with Facebook <br/><img src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/32/Facebook-icon.png" alt="not found"></img></button></p>
                <p><button className="google-loginbtn" onClick={SignInWithGoogle} >Sign with Google <br/><img src="https://www.google.com/favicon.ico" alt="not found"></img></button></p> 
                {/* <p><button className="twitter-loginbtn" >Sign with Twitter <br/><img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/32/Twitter-icon.png" alt="not found"></img></button></p> */}
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}





export default SignIn;
