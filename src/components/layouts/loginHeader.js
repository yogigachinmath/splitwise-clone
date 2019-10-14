import React, { Component } from "react";
import logo from "../../logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="login-header">
        <nav className="navbar">
          <a className="navbar-brand login-logo" href="/">
            <img
              src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg"
              className="App-logo"
              alt="logo"
            />
          </a>
          <ul className="font-mono nav nav-pills">
            <li className="nav-item">
              <a className="nav-link login-login-btn" href="/login">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link orange-background" href="/register">
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
