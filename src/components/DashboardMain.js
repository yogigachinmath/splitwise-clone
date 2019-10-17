import React, { Component } from "react";
import Header from "./layouts/Header";
import LeftSidebar from "../components/layouts/dash/LeftSidebar";
import fire from "../config/fire";

export class DashboardMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      expenseData: []
    };
  }
  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState(() => ({ user: user }));
        fire.firestore().collection("expenses")
          .where("createdBy", "==", user.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              this.setState({
                  expenseData: [{id: doc.id, ...doc.data()}]
              })
            });
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        // alert('please login');
      }
    });
  }
  //   f3qC7AmBDnaC4uODf1HzNWyy6W72 - new
  //   Tlpa5fQ5lUdQmuq4x9I91PW6GCD3 - 2
  render() {
    return (
      <React.Fragment>
        <Header userDetails={this.state.user} />
        <div className="container">
          <div className="row">
            <div className="left-sidebar col-md-3">
              <LeftSidebar {...this.props} />
            </div>
            <div className="dash-main-content col-md-6">
              <div className="dash-header p-3">
                <div className="row">
                  <h4 className="mr-auto">Dashboard</h4>
                  <div className="dash-header-right ml-auto">
                    <button className="btn btn-orange">Add an expense</button>
                    <button className="btn btn-blue ml-2">Settle up</button>
                  </div>
                </div>
              </div>
              <div className="content-dash p-5">
                <div className="row firstTimeDisplay">
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
                      To add a new expense, click the orange “Add an expense”
                      button.
                    </p>
                    {console.log("HTML",this.state.expenseData,this.state.expenseData.length)}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-sidebar col-md-3">
              <img
                src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                className="logo-dash-right ml-2 mt-2"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardMain;
