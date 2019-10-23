import React, { Component } from "react";
import userDummyPic from "../layouts/user.png";
import "./groupmember.css";

class GroupMember extends Component {
  render() {
    return (
      <div className="d-flex mt-3">
        <img src={userDummyPic} className="member-image mr-2" alt="" />
        <div className="d-flex flex-column line-height-18 mt-1">
          <span>{this.props.member.name}</span>
          {this.props.userBalances[this.props.member.id] ? (
            +this.props.userBalances[this.props.member.id].toFixed(0) === 0 ? (
              <small className="text-secondary">all settle</small>
            ) : +this.props.userBalances[this.props.member.id] > 0 ? (
              <small className="colorBlue">
                gets back &#x20b9;{" "}
                {+this.props.userBalances[this.props.member.id].toFixed(2)}
              </small>
            ) : (
              <small className="orange-color">
                owes &#x20b9;{" "}
                {-+this.props.userBalances[this.props.member.id].toFixed(2)}
              </small>
            )
          ) : (
            <small className="text-secondary">settle up</small>
          )}
        </div>
      </div>
    );
  }
}

export default GroupMember;
