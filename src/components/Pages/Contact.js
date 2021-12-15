import React from "react";
import "../Pages/contact.css";
import emailjs from 'emailjs-com';
// import { auth } from "../../config/Firebase-config";
// import { useHistory } from "react-router-dom";

function Contact()  {

  // const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  // const history = new useHistory();
  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     return setIsUserSignedIn(true);
  //   }

  //   setIsUserSignedIn(false);
  // });

  function handleOnSubmit (e){
    emailjs.sendForm('service_jd57wlk', 'feedback', e.target, 'user_srGuLmi5bWb010vuMbKKC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    alert("Feedback Submitted!!")
  }

  // if (isUserSignedIn != true) {
  //   alert("Sign in to give Feedback")
  //   history.push("/signin")
  // }

    return (
      <div>
        <div class="contactme" id="contact">
          <div class="contactOverlay">
            <div class="container">
              <div class="form">
                <form action="" onSubmit={handleOnSubmit}>
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
export default Contact;
