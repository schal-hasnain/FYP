import React, { Component } from "react";
import "./Navbar.css";
import { Button } from "./Buttons";
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <a className="navbar-logo" href="/">
          <h1 style={{ color: "white" }}>
            MedicNet{" "}
            <i className="fas fa-user-md" style={{ color: "white" }}></i>
          </h1>
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a className="nav-links" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-links" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav-links" href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>
        <a href="/signin">
          <Button>Sign In</Button>
        </a>
      </nav>
    );
  }
}
export default Navbar;
