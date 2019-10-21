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
    input.setAttribute("required", true);
    input.setAttribute("class", "mr-2 inputName");
    input.setAttribute("placeholder", "Name");
    input.setAttribute("name", "name");
    input.addEventListener("change", e => {
      this.handleChange(e);
    });
    input.setAttribute("value", "");
    var email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("required", true);
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

  submitForm = async e => {
    e.preventDefault();
    let Members = [];
    let count = 0;
    let name = document.querySelectorAll(".inputName");
    let email = document.querySelectorAll(".inputEmail");
    for (let i = 0; i < name.length; i++) {
      let snap = await fire
        .firestore()
        .collection("users")
        .where("email", "==", email[i].value)
        .where("name", "==", name[i].value)
        .get();
      if (snap.size > 0) {
        snap.forEach(doc => {
          Members.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email
          });
        });
        count++;
      }
    }
    if (count === name.length) {
      try {
        await fire
          .firestore()
          .collection("users")
          .doc(this.state.user.uid)
          .set(
            {
              friends: Members
            },
            { merge: true }
          );
      } catch (e) {
        document.querySelector(".errorMsg").textContent = e;
      }
      for (let i = 0; i < Members.length; i++) {
        try {
          await fire
            .firestore()
            .collection("users")
            .doc(Members[i].id)
            .set(
              {
                friends: [
                  {
                    id: this.state.user.uid,
                    name: this.state.user.displayName,
                    email: this.state.user.email
                  }
                ]
              },
              { merge: true }
            );
        } catch (e) {
          document.querySelector(".errorMsg").textContent = e;
        }
      }
      Members.push({
        id: this.state.user.uid,
        name: this.state.user.displayName,
        email: this.state.user.email
      });
      try {
        await fire
          .firestore()
          .collection("group")
          .add({
            Members,
            createdBy: this.state.user.uid,
            name: document.querySelector(".bigbox").value
          });
      } catch (e) {
        document.querySelector(".errorMsg").textContent = e;
      }

      // fetching groups
      let groupId;
      let snapGroup = await fire
        .firestore()
        .collection("group")
        .where("name", "==", document.querySelector(".bigbox").value)
        .where("createdBy", "==", this.state.user.uid)
        .get();
      if (snapGroup.size > 0) {
        snapGroup.forEach(doc => {
          groupId = doc.id;
        });
      }
      for (let i = 0; i < Members.length; i++) {
        try {
          await fire
            .firestore()
            .collection("users")
            .doc(Members[i].id)
            .set(
              {
                groups: [groupId]
              },
              { merge: true }
            );
        } catch (e) {
          document.querySelector(".errorMsg").textContent = e;
        }
      }
      window.location.replace("/dash/main");
    } else {
      document.querySelector(".errorMsg").style.display = "block";
      document.querySelector(".errorMsg").textContent =
        "User not found with those credentials";
    }
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
              <div className="errorMsg my-3 p-3 bg-danger text-light"></div>
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
