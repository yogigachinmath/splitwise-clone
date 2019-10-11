import React, { Component } from "react";
import logo from "../../logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
