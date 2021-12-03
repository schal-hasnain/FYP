import React, { Component } from "react";
import "./signin.css";

class SignIn extends Component {
  render() {
    return (
      <div>
        <div class="login" id="login">
          <div class="LoginOverlay">
            <div class="logincontainer">
              <div class="form-login">
                <form action="" onSubmit="">
                  <div class="formWord-login">
                    <span>Enter Email</span>
                    <br />
                    <input class="input100" type="text" name="email" required />
                    <br />
                    <span>Enter Password</span>
                    <br />
                    <input
                      class="input100"
                      type="password"
                      name="password"
                      required
                    />
                    <br />
                    <button className="loginbtn">Login</button>
                    <br />
                    <br />
                    <a href="/signup">Click Here if you are New!!</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
