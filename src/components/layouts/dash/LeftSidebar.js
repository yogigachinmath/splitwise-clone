import React, { Component } from "react";
import UserPic from "../user.png";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Modal from "./friends/modal";
import './friends/friends.css';
import Friend from '../friend/friend'

export class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      userName: "",
      email: ""
    };
    this.handleclick = this.handleclick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleclick(e) {
    e.preventDefault();
    console.log(this.state);
    const userinfo = { email: this.state.email, username: this.state.username };
    const friends = this.state.friends;
    friends.push(userinfo);
    this.setState({
      friends
    });
    this.setState({
        userName:'',
        email:''
    }) 
  document.getElementById('addFriendForm').reset();
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
                  <span className="modal-popup-text ml-2"><b>ADD FRIEND</b></span>
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
              <form onSubmit={this.handleclick} id='addFriendForm'>
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
          <Link to = {`/dash/main`}>
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
            <Link to = {`/expenses`}>
          <span className="fa fa-bars"></span>
          <span className="sidebarExpensesText ml-2 lh">All expenses</span>
          </Link>
        </div>
        <div className="groupSidebar">
          <div className="row bg-light text-secondary px-2">
            <span className="labelListsSidebar mr-auto">Groups</span>
            <span className="addSidebar">
              <span className="addIcon fa fa-plus mr-1"></span>add
            </span>
          </div>
          <div className="appendGroupNames ml-3">
            <p className="textGroups">
              <span className="fa fa-tag mr-2"></span>Test
            </p>
            <p className="textGroups">
              <span className="fa fa-tag mr-2"></span>Test
            </p>
            <p className="textGroups">
              <span className="fa fa-tag mr-2"></span>Test
            </p>
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
              <span className='addIcon fa fa-plus mr-1'> add</span>
            </button>
            <span className="addSidebar"></span>
          </div>
          <div className="appendFriendNames ml-3">
            {this.state.friends.map(val => (
              <p className="textGroups">
                  <Link to={{
                      pathname :`/dash/${val.username}`,
                      state:{
                        info:val.username
                      }}} >
                <i className = 'icon-user'></i>
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
