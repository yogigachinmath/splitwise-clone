import React, { Component } from "react";
import fire from "../config/fire";

class ExpenseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: {}
    };
  }
  getUserNames = usersId => {
    usersId.forEach(userId => {
      let userNames = this.state.userName;
      fire.auth().onAuthStateChanged(async user => {
        if (user) {
          this.setState(() => ({ currentUser: user.uid }));
          this.setState(() => ({ user: user }));
          const expenseData = await fire
            .firestore()
            .collection("users")
            .doc(userId)
            .get();
          userNames[userId] = expenseData.data().name;
          this.setState({ userName: userNames });
        }
      });
    });
  };
  componentDidMount() {
    this.getUserNames(Object.keys(this.props.expense.users));
  }
  payerOwes = expense => {};
  render() {
    const expense = this.props.expense;
    return (
      <div className="container expense-detail line-height-18 bg-light">
        <div className="d-flex expense-details">
          <img
            className="expense-details-img mr-2"
            src="/img/general@2x.png"
            alt=""
          />
          <div>
            <span>{expense.description}</span>
            <h5 className="m-0 font-weight-bold">INR {expense.cost}</h5>
            <small className="text-secondary">
              Added by {this.state.userName[expense.createdBy]} on October 15,
              2019
            </small>
          </div>
        </div>
        <hr className="m-0 mb-3" />
        {Object.keys(expense.users).map(user => {
          return (
            <div className="mb-2">
              <img
                className="expense-user-img border rounded-circle"
                src="/img/default-avatar.png"
                alt=""
              />
              <small>
                <b>{this.state.userName[user]}</b>
                {expense.users[user].paidShare !== 0 && " paid "}
                {expense.users[user].paidShare !== 0 && (
                  <b>{expense.users[user].paidShare}</b>
                )}
                {expense.users[user].paidShare !== 0 && " and"} owes{" "}
                <b>INR{expense.users[user].owedShare}</b>
              </small>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExpenseDetail;
