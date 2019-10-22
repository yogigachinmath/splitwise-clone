import React, { Component } from "react";
import fire from "../../config/fire";
import GroupMember from "./GroupMember";
import ShowExpense from "../ShowExpenses";

class group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupDetails: {},
      expensesData: []
    };
  }
  getUserBalances(expenses) {
    const userBalances = expenses.reduce((balances, expense) => {
      let currentBalances = balances;
      Object.keys(expense.users).forEach(user => {
        currentBalances[user]
          ? (currentBalances[user] += expense.users[user].netBalance)
          : (currentBalances[user] = expense.users[user].netBalance);
      });
      balances = currentBalances;
      return balances;
    }, {});
    return userBalances;
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
        expenses.push(expenseData.data());
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
  sortExpenses(expenses) {
    expenses.sort(function(a, b) {
      return b.createdAt.seconds - a.createdAt.seconds;
    });
    return expenses;
  }
  componentDidMount() {
    this.getGroupDetails();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.groupName !== this.props.match.params.groupName
    ) {
      this.setState({ expensesData: [] });
      this.getGroupDetails();
    }
  }
  render() {
    const userBalances = this.getUserBalances(this.state.expensesData);
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
          {this.state.expensesData.length !== 0 &&
            this.sortExpenses(this.state.expensesData).map(expenseId => {
              return (
                <ShowExpense
                  expense={expenseId}
                  currentUser={this.props.user.uid}
                  group="yes"
                />
              );
            })}
        </div>
        <div className="right-sidebar col-md-3 p-3">
          <small className="text-secondary font-weight-bold font-size-13">
            GROUP BALANCES
          </small>
          {this.state.groupDetails.Members &&
            this.state.groupDetails.Members.map(member => {
              return (
                <GroupMember member={member} userBalances={userBalances} />
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}
export default group;
