import React, { Component } from "react";
import ProfileImg from "./layouts/user.png";

export class AddApartment extends Component {
  displayContentOnChange = e => {
    e.target.parentElement.nextSibling.style.display = "block";
  };
  removeAddFriendForm = (e) => {
      e.target.parentElement.remove();
  }
  appendAddFriendForm = (e) => {
      var friendForm = document.querySelector('.addFriendForm');
      document.getElementById('appendNewFriendForm').appendChild(friendForm.cloneNode(true));
  }
  render() {
    return (
      <div className="container main">
        <div className="row">
          <div className="addApartment-logo">
            <img
              src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
              alt="logo"
            />
          </div>
          <div className="form addApartment">
            <form action="/dash/main">
              <h6 className="addGroupText">Start a new group</h6>
              <h3>My group shall be called..</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control bigbox"
                  onChange={this.displayContentOnChange}
                  required
                />
              </div>
              <div className="displayOnChange">
                <hr />
                <h6 className="addGroupText">Group Members</h6>
                <div className="row userArea mb-4">
                  <img
                    src={ProfileImg}
                    className="profileImg mr-2"
                    alt="profile"
                  />
                  <span className="userNameText mr-2">user</span>
                  <span className="userEmailText">(test@gmail.com)</span>
                </div>
                <div className="row addFriendForm mb-4">
                  <img
                    src={ProfileImg}
                    className="profileImg mr-2"
                    alt="profile"
                  />
                  <input type="text" className = "mr-2" placeholder="Name" />
                  <input type="email" className = "mr-2" placeholder="Email address (optional)" />
                  <span className="removeAddFriendForm" onClick = {this.removeAddFriendForm}>&times;</span>
                </div>
                <div id = "appendNewFriendForm"></div>
                <span onClick = {this.appendAddFriendForm} className = "appendNewFriendForm">+ Add a person</span>
              </div>
              <button type="submit" className="btn btn-orange">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddApartment;
