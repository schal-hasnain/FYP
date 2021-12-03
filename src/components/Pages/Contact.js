import React, { Component } from "react";
import "../Pages/contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="contactme" id="contact">
          <div class="contactOverlay">
            <div class="container">
              <div class="form">
                <form action="" onSubmit="">
                  <div class="formWord">
                    <h2>Asalam o Alaikum!</h2>
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
                  </div>
                  <div class="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <button>SUBMIT</button>
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
export default Contact;
