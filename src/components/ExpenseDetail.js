import React, { Component } from "react";
import moment from "moment";

class ExpenseDetail extends Component {
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
              Added by {expense.createdBy.name} on{" "}
              {moment.unix(expense.createdAt.seconds).format("MMMM DD, YYYY")}
            </small>
          </div>
        </div>
        <hr className="m-0 mb-3" />
        {Object.keys(expense.users).map(user => {
          return (
            <div className="mb-2">
              <img
                className="expense-user-img border rounded-circle mr-2"
                src="/img/default-avatar.png"
                alt=""
              />
              <small>
                <b>{expense.users[user].name}</b>
                {expense.users[user].paidShare !== 0 && " paid "}
                {expense.users[user].paidShare !== 0 && (
                  <b>&#x20b9;{expense.users[user].paidShare}</b>
                )}
                {expense.users[user].paidShare !== 0 && " and"} owes{" "}
                <b>&#x20b9;{expense.users[user].owedBalance}</b>
              </small>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExpenseDetail;
