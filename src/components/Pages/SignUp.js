import React, {useRef,useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";


const SignUp = () => {
  
  const emailRef = useRef(null);
  const psdRef = useRef(null);
  const [errorMessage , setErrorMessage] = useState("");
  const history = new useHistory();

  const onSubmit = e =>{
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,emailRef.current.value,psdRef.current.value)
    .then(e => history.push("/"))
    .catch((error) =>{
      const errorCode = error.code;
      setErrorMessage(errorCode);
      console.log(errorCode);   
    });

  }

    return (
        <div>
             <div class="login" id="login">
          <div class="LoginOverlay">
            <div class="logincontainer">
              <div class="form-login">
                <form action="" onSubmit="">
                  <div class="formWord-login">
                  {errorMessage !== "" ? <div className="Error">{errorMessage}</div>: null}
                    <span>Full Name</span>
                    <br />
                    <input
                      class="input100"
                      type="name"
                      
                      required
                    />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input class="input100" type="text" name="phone" required />
                    <br />
                    <span>Enter Email</span>
                    <br />
                    <input class="input100" type="email" ref={emailRef} required />
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
                    <button className="loginbtn" onClick={onSubmit}>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default SignUp
