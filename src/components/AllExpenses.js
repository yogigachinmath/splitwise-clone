import React, { Component } from "react";
import "./expenses.css";
import ShowExpense from "./ShowExpenses";
import data from "../data.json";
import fire from "../config/fire";

export class DashboardMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      expenseData: [],
      currentUser: null,
      expenses: this.getUserExpenses(
        data.expenses,
        data.users["user1"].expenses
      ),
      expensesId: null,
      expensesData: this.props.expensesData
    };
  }

  getUserExpenses = (expenses, userExpensesId) => {
    return userExpensesId.reduce((userExpenses, userExpenseId) => {
      userExpenses[userExpenseId] = expenses[userExpenseId];
      return userExpenses;
    }, {});
  };

  render() {
    return (
      <React.Fragment>
        <div className="dash-main-content col-md-6">
          {console.log(Object.keys(this.state.expensesData))}
          <div className="dash-header p-3">
            <div className="row">
              <h4 className="mr-auto">All Expenses</h4>
              <div className="dash-header-right ml-auto">
                <button className="btn btn-orange">Add an expense</button>
                <button className="btn btn-blue ml-2">Settle up</button>
              </div>
            </div>
          </div>
          {Object.keys(this.props.expensesData).map(expense => {
            console.log("here");
            return (
              <ShowExpense
                expense={this.props.expensesData[expense]}
                currentUser={this.props.currentUser}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardMain;
