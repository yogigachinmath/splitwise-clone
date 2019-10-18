import React, { Component } from "react";
import "./expenses.css";
import ShowExpense from "./ShowExpenses";
import data from "../data.json";

export class DashboardMain extends Component {
  getUserExpenses = (expenses, userExpensesId) => {
    return userExpensesId.reduce((userExpenses, userExpenseId) => {
      userExpenses[userExpenseId] = expenses[userExpenseId];
      return userExpenses;
    }, {});
  };
  state = {
    currentUser: "user1",
    expenses: this.getUserExpenses(data.expenses, data.users["user1"].expenses)
  };

  render() {
    return (
      <React.Fragment>
        <div className="dash-main-content col-md-6">
          {console.log(data)}
          <div className="dash-header p-3">
            <div className="row">
              <h4 className="mr-auto">All Expenses</h4>
              <div className="dash-header-right ml-auto">
                <button className="btn btn-orange">Add an expense</button>
                <button className="btn btn-blue ml-2">Settle up</button>
              </div>
            </div>
          </div>
          {Object.keys(this.state.expenses).map(expense => {
            return (
              <ShowExpense
                expense={this.state.expenses[expense]}
                currentUser={this.state.currentUser}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardMain;
