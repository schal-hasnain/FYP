import React, { Component } from "react";
import { MenuItems } from "./NavbarElements";
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
          <h1 style={{color:"black"}}>
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
          {MenuItems.map((items, index) => {
            return (
              <li>
                <a className={items.cName} href={items.url}>
                  {items.titles}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="/signin">
          <Button>Sign In</Button>
        </a>
      </nav>
    );
  }
}
export default Navbar;
