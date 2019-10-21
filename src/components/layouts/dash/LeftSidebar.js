import React, { Component } from "react";
// import UserPic from '../user.png';
import { BrowserRouter, Link, Route } from "react-router-dom";
// import Modal from './friends/modal';
import "./friends/friends.css";
import fire from "../../../config/fire";
import "firebase/database";
// import Friend from '../friend/friend'

export class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      userName: "",
      email: "",
      group: [{ name: "You do not have any group" }]
    };
    this.handleclick = this.handleclick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fire
      .firestore()
      .collection("group")
      .where("Members", "==", true)
      .where("name", "==", this.state.userName)
      .get()
      .then(snap => {
        snap.forEach(doc => {
          // console.log('Left bar ', doc.data());
          this.setState({ group: [doc.data()] });
        });
      });
    function getuser() {
      return new Promise(async (resolve, reject) => {
        await fire.auth().onAuthStateChanged(async user => {
          if (user) {
            resolve(user);
            return;
          }
          reject("error");
        });
      });
    }
    getuser().then(async user => {
      let arr = [];
      const userData = await fire
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get();
      if (userData.data().friends) {
        userData
          .data()
          .friends.map(val =>
            arr.push({ email: val.email, username: val.name })
          );
      }
      // console.log(userData.data());
      let group = [];
      if (userData.data().groups) {
        userData.data().groups.map(val => {
          group.push({ name: val.name, id: val.id });
        });
      }
      this.setState({
        friends: arr,
        group
      });
    });
  }

  handleclick(e) {
    e.preventDefault();
    // console.log(this.state);
    const userinfo = { email: this.state.email, username: this.state.username };
    const friends = this.state.friends;
    friends.push(userinfo);
    this.setState({
      friends
    });
    this.setState({
      userName: "",
      email: ""
    });
    document.getElementById("addFriendForm").reset();
    //   document.getElementById('addFriendForm')
    // document.querySelector('.modal-dialog').setAttribute('data-dismiss',"modal");
    // e.target.setAttribute('type', 'modal');
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleChangeOverClick = e => {
    document.querySelectorAll(".sidebarText").forEach(element => {
      element.classList.remove("colorBlue");
    });
    e.target.classList.add("colorBlue");
    if (e.target.classList.contains("dashClass")) {
      //   console.log('Class list');
      //   e.target.previousSibling.classList.remove('grayImg');
    }
  };
  render() {
    return (
      <div>
        {/* MOdal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title row" id="exampleModalLabel">
                  <img src="/img/logo1.svg" className="logo" alt="site" />
                  <span className="modal-popup-text ml-2">
                    <b>ADD FRIEND</b>
                  </span>
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleclick} id="addFriendForm">
                <div className="modal-body">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Enter email address"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      value={this.state.name}
                      placeholder="Enter name"
                      onChange={this.handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // onClick={this.handleclick}
                  >
                    ADD FRIEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* modal */}

        <div className="row mt-3">
          <img src="/img/logo1.svg" className="logoDash grayImg" alt="logo" />
          <Link to={`/dash/main`}>
            <span
              className="sidebarText dashClass ml-2 lh"
              onClick={this.handleChangeOverClick}
            >
              Dashboard
            </span>
          </Link>
        </div>
        <div className="row">
          <span className="fa fa-flag"></span>
          <span className="sidebarText colorBlue ml-2 lh">Recent activity</span>
        </div>
        <div className="row mt-2">
          <Link to={`/expenses`}>
            <span className="fa fa-bars"></span>
            <span className="sidebarExpensesText ml-2 lh">All expenses</span>
          </Link>
        </div>
        <div className="groupSidebar">
          <div className="row bg-light text-secondary px-2">
            <span className="labelListsSidebar mr-auto">Groups</span>
            <span className="addSidebar">
              <a href="/new/apartment">
                <span className="addIcon fa fa-plus mr-1"></span>add
              </a>
            </span>
          </div>
          {console.log(this.state.group)}
          <div className="appendGroupNames ml-3 text-secondary">
            {this.state.group.map(ele => (
              <p className="textGroups">
                {/* {console.log(ele,'ele')} */}
                <Link
                  to={{
                    pathname: `/group/${ele.id}/${ele.name}`
                  }}
                >
                  <span className="fa fa-tag mr-2"></span>
                  {ele.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
        <div className="friendsSidebar">
          <div className="row bg-light text-secondary px-2">
            <span className="labelListsSidebar mr-auto">Friends</span>
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <span className="addIcon fa fa-plus mr-1"> add</span>
            </button>
            <span className="addSidebar"></span>
          </div>
          <div className="appendFriendNames ml-3">
            {/* {console.log(this.state.friends)} */}
            {this.state.friends.map(val => (
              <p className="textGroups">
                {console.log("val", val)}
                <Link
                  to={{
                    pathname: `/dash/friend/${val.id}/${val.username}`,
                    state: {
                      details: val
                    }
                  }}
                >
                  <i className="icon-user"></i>
                  {val.username}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSidebar;
