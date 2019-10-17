import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Modal from "./friends/modal";
// import * as $AB from 'jquery';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

export class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ["yogi", "yogi"]
    };
    this.handleAddfriend = this.handleAddfriend.bind(this);
  }
  handleAddfriend(friendusername, friendemail) {
    console.log(friendusername);
    this.setState({
      friends: friendusername
    });
  }
  handleChangeOverClick = e => {
    document.querySelectorAll(".sidebarText").forEach(element => {
      element.classList.remove("colorBlue");
    });
    e.target.classList.add("colorBlue");
    if (e.target.classList.contains("dashClass")) {
      console.log("Class list");
      e.target.previousSibling.classList.remove("grayImg");
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Modal */}

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Modal */}
          <div className="row mt-3">
            <img src="/img/logo1.svg" className="logoDash grayImg" alt="logo" />
            <span
              className="sidebarText dashClass ml-2 lh"
              onClick={this.handleChangeOverClick}
            >
              Dashboard
            </span>
          </div>
          <div className="row">
            <span className="fa fa-flag"></span>
            <span className="sidebarText colorBlue ml-2 lh">
              Recent activity
            </span>
          </div>
          <div className="row mt-2">
            <span className="fa fa-bars"></span>
            <span className="sidebarExpensesText ml-2 lh">All expenses</span>
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
              {/* <Link to = {`${this.props.location.pathname}/addfriend`}> */}
              <span className="addSidebar">
                <button
                  className="addIconBtn fa fa-plus mr-1"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  {" "}
                  add
                </button>
              </span>
              {/* <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button> */}
              {/* </Link> */}
            </div>
            <div className="appendFriendNames ml-3">
              {this.state.friends.map(val => (
                <p className="textGroups">
                  <span className="fa fa-tag mr-2"></span>
                  {val}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Route
          path={`${this.props.location.pathname}/addfriend`}
          render={props => (
            <Modal
              friends={this.state.friends}
              handleAddfriend={this.handleAddfriend}
              {...this.props}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default LeftSidebar;
