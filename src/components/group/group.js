import React, { Component } from "react";
import fire from "../../config/fire";
import GroupMember from "./GroupMember";
import GroupExpenses from "./GroupExpenses";
import ShowExpense from "../ShowExpenses";

class group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupDetails: {},
      expensesData: {}
    };
  }
  async getExpenses(expensesId) {
    if (expensesId) {
      let expenses = this.state.expensesData;
      expensesId.forEach(async expenseId => {
        const expenseData = await fire
          .firestore()
          .collection("expenses")
          .doc(expenseId)
          .get();
        expenses[expenseId] = expenseData.data();
        this.setState({ expenseData: expenses });
      });
    }
  }
  async getGroupDetails() {
    const groupDetails = await fire
      .firestore()
      .collection("group")
      .doc(this.props.match.params.groupId)
      .get();
    if (groupDetails.data().expenses) {
      this.getExpenses(groupDetails.data().expenses);
    }
    this.setState({ groupDetails: groupDetails.data() });
  }
  componentDidMount() {
    console.log("in did mount");
    this.getGroupDetails();
    console.log(this.state.groupDetails);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.groupName !== this.props.match.params.groupName
    ) {
      this.setState({ expensesData: {} });
      this.getGroupDetails();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="dash-main-content col-md-6">
          <div className="dash-header p-3">
            <div className="row">
              <h4 className="mr-auto">{this.state.groupDetails.name}</h4>
              <div className="dash-header-right ml-auto">
                <button className="btn btn-orange">Add an expense</button>
                <button className="btn btn-blue ml-2">Settle up</button>
              </div>
            </div>
          </div>
          {Object.keys(this.state.expensesData).length !== 0 &&
            Object.keys(this.state.expensesData).map(expenseId => {
              return (
                <ShowExpense
                  expense={this.state.expensesData[expenseId]}
                  currentUser={this.props.user.uid}
                />
              );
            })}
        </div>
        <div className="right-sidebar col-md-3"></div>
      </React.Fragment>
    );
  }
}
export default group;
