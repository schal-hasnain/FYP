import React from "react";
import Footer from "./Footer/index";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <h4
              style={{
                color: "white",
                padding: "1rem",
                fontFamily: "Montserrat,sans-serif",
              }}
            >
              We are Provinding our users a platform to search a doctor in a
              easy way so everyone can find a doctor{" "}
            </h4>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link>Doctor Searching</Footer.Link>
            <Footer.Link>Area Based Searching</Footer.Link>
            <Footer.Link>Doctor Classification</Footer.Link>
            <Footer.Link>Easy Search</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="">SCHAL HASNAIN</Footer.Link>
            <Footer.Link href="">HASSAAN FAROOQ</Footer.Link>
            <Footer.Link href="">NOMAN SADIQ</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="/">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="/">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="/">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="/">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
