import React, { Component } from "react";

class ExpenseDetail extends Component {
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
              Added by Arun p. on October 15, 2019
            </small>
          </div>
        </div>
        <hr className="m-0 mb-3" />
        {expense.repayments.map(repayment => {
          return (
            <div className="mb-2">
              <img
                className="expense-user-img border rounded-circle"
                src="/img/default-avatar.png"
                alt=""
              />
              <small>
                {" "}
                <b>{repayment.from}</b> owes <b>INR{repayment.amount}</b>
              </small>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExpenseDetail;
