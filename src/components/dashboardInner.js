import React, { Component } from "react";
import "./dashboardinner.css";

class Dash extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dash-main-content col-md-6">
          {console.log(this.props)}
        <div className="dash-header pt-2 pl-3 pr-3 border border-top-0 border-left-0 border-right-0">
          <div className="row">
            <h4 className="mr-auto">Dashboard</h4>
            <div className="dash-header-right ml-auto">
              <button className="btn btn-orange">Add an expense</button>
              <button className="btn btn-blue ml-2">Settle up</button>
            </div>
          </div>
          <div className="d-flex justify-content-between border border-left-0 border-right-0 border-bottom-0 mt-3 pt-2 pb-2">
            <div className="d-flex flex-column align-items-center w-3">
              <small className="text-secondary">total balance</small>
              <small className="orange-color">INR 200*</small>
            </div>
            <div className="d-flex flex-column align-items-center w-3 border border-top-0 border-bottom-0">
              <small className="text-secondary">you owe</small>
              <small className="orange-color">INR 100</small>
            </div>
            <div className="d-flex flex-column align-items-center w-3">
              <small className="text-secondary">you are owed</small>
              <small className="colorBlue">INR 100*</small>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column w-50 pt-2 pl-3 pr-3">
            <span className="text-secondary font-weight-bold balance-heading">
              YOU OWE
            </span>
            <div className="d-flex line-height-18 border border-left-0 border-top-0 border-bottom-0 mt-3">
              <img
                className="expense-user-img border rounded-circle mr-2"
                src="/img/default-avatar.png"
                alt=""
              />
              <div>
                <h6 className="m-0">Saurav Choudhury</h6>
                <small className="orange-color">
                  you owe <b>INR100</b>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column w-50 pt-2 pl-3 pr-3">
            <span className="text-secondary align-self-end font-weight-bold balance-heading">
              YOU ARE OWED
            </span>
            <div className="d-flex line-height-18 mt-3">
              <img
                className="expense-user-img border rounded-circle mr-2"
                src="/img/default-avatar.png"
                alt=""
              />
              <div>
                <h6 className="m-0">Saurav Choudhury</h6>
                <small className="colorBlue">
                  owes you <b>INR100</b>
                </small>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="content-dash p-5">
          <div className="row">
            <img
              src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png"
              alt="blue-man"
              className="blue-person mr-auto col-md-4"
            />
            <div className="content-dash-right ml-auto col-md-8">
              <h3>
                You’re all settled up.
                <br /> Awesome!
              </h3>
              <p>
                To add a new expense, click the orange “Add an expense” button.
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Dash;
