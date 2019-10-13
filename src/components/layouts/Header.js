import React, { Component } from "react";
import userDummyPic from "./user.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                className="logo"
                alt="logo"
              />
              <span className="text-logo">Splitwise</span>
            </a>
            <ul className="nav nav-pills">
              {/* <li className="nav-item">
             <a className="nav-link" href="/">
               Log in
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/">
               Sign Up
             </a>
           </li> */}
              {/* <li className = "nav-item">   */}
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                    <img src={userDummyPic} alt = "user-dummy-pic" className = "userDummyPic" />
                    <span className = "userName"> user </span> 
                </div>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/account">
                    Your account
                  </a>
                  <a className="dropdown-item" href="/create-group">
                    Create a group
                  </a>
                  <a className="dropdown-item" href="/logout">
                    Log out
                  </a>
                </div>
              </div>
              {/* </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
