import React, { Component } from "react";
import ProfileImg from "./layouts/user.png";
import fire from "../config/fire";
import "firebase/database";

export class AddApartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      groupName: "",
      user: {}
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  displayContentOnChange = e => {
    e.target.parentElement.nextSibling.style.display = "block";
    this.setState({ [e.target.name]: e.target.value });
  };
  removeAddFriendForm = e => {
    e.target.parentElement.remove();
  };
  appendAddFriendForm = e => {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "mr-2 inputName");
    input.setAttribute("placeholder", "Name");
    input.setAttribute("name", "name");
    input.addEventListener("change", e => {
      this.handleChange(e);
    });
    input.setAttribute("value", "");
    var email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("class", "mr-2 inputEmail");
    email.setAttribute("placeholder", "Email");
    email.setAttribute("name", "email");
    email.addEventListener("change", e => {
      this.handleChange(e);
    });
    email.setAttribute("value", "");
    var span = document.createElement("span");
    span.setAttribute("class", "removeAddFriendForm fa fa-trash");
    span.addEventListener("click", e => {
      this.removeAddFriendForm(e);
    });
    var row = document.createElement("div");
    row.setAttribute("class", "row m-0 mb-2");
    row.append(input);
    row.append(email);
    row.append(span);
    document.getElementById("appendNewFriendForm").append(row);
  };

  submitForm = e => {
    e.preventDefault();
    let Members = [];
    let name = document.querySelectorAll(".inputName");
    let email = document.querySelectorAll(".inputEmail");
    for (let i = 0; i < name.length; i++) {
      Members.push({ name: name[i].value, email: email[i].value });
    }
    Members.push({
      name: this.state.user.displayName,
      email: this.state.user.email
    });
    fire
      .firestore()
      .collection("group")
      .add({
        Members,
        createBy: this.state.user.uid,
        name: document.querySelector(".bigbox").value
      })
      .then(() => {
        window.location.replace('/dash/main');
      })
      .catch(e => console.log(e));
  };

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState(() => ({ user: user }));
      } else {
        // alert('please login');
      }
    });
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
            <form onSubmit={this.submitForm}>
              <h6 className="addGroupText">Start a new group</h6>
              <h3>My group shall be called..</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control bigbox"
                  name="groupName"
                  onChange={this.displayContentOnChange}
                  value={this.state.groupName}
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
                  <span className="userNameText mr-2">
                    {this.state.user.displayName}
                  </span>
                  <span className="userEmailText">{this.state.user.email}</span>
                </div>
                <div id="appendNewFriendForm"></div>
                <span
                  onClick={this.appendAddFriendForm}
                  className="appendNewFriendForm"
                >
                  + Add a person
                </span>
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
