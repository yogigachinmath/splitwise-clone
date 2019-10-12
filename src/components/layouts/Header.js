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
          <ul className="font-mono nav nav-pills">
            <li className="nav-item">
              <a className="nav-link green-color" href="/">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link green-background" href="/register">
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
