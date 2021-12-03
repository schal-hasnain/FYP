import React from 'react'

const SignUp = () => {
    return (
        <div>
             <div class="login" id="login">
          <div class="LoginOverlay">
            <div class="logincontainer">
              <div class="form-login">
                <form action="" onSubmit="">
                  <div class="formWord-login">
                    <span>Full Name</span>
                    <br />
                    <input
                      class="input100"
                      type="text"
                      name="fullName"
                      required
                    />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input class="input100" type="text" name="phone" required />
                    <br />
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
                    <button className="loginbtn">Register</button>
                    <br />
                    <br />
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
