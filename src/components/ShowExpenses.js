import React, { Component } from "react";
import ExpenseDetail from "./ExpenseDetail";
import moment from "moment";

class ShowExpenses extends Component {
  state = { showExpenseDetails: false };
  showDetails = e => {
    if (this.state.showExpenseDetails === false) {
      this.setState({ showExpenseDetails: true });
    } else {
      this.setState({ showExpenseDetails: false });
    }
  };
  payer = users => {
    const payers = Object.keys(users).reduce((payerNames, currentUser) => {
      if (users[currentUser].netBalance > 0) {
        payerNames.push(users[currentUser].name);
      }
      return payerNames;
    }, []);
    if (payers.length === 1) {
      if (payers[0] === users[this.props.currentUser].name) {
        return "you";
      }
      return payers[0];
    }
    return payers.length;
  };

  render() {
    return (
      <React.Fragment>
        <div className="expense" onClick={this.showDetails}>
          <div className="row expence-row line-height-18 border border-top-0 border-left-0 border-right-0">
            <div className="d-flex justify-content-between container">
              <div className="d-flex expenses-child-1 align-items-center">
                <div className="d-flex flex-column mr-2 text-secondary align-items-center line-height-18">
                  <small className="text-uppercase font-size-10">
                    {moment
                      .unix(this.props.expense.createdAt.seconds)
                      .format("MMM")}
                  </small>
                  <h5 className="line-height-18 mb-1">
                    {moment
                      .unix(this.props.expense.createdAt.seconds)
                      .format("DD")}
                  </h5>
                </div>
                <img
                  className="expense-img mr-2"
                  src="/img/general@2x.png"
                  alt=""
                />
                <div className="d-flex flex-column">
                  <a
                    className="expense-heading text-truncate font-weight-bold"
                    href="#"
                  >
                    {this.props.expense.description}
                  </a>
                  {this.props.expense.group && !this.props.group ? (
                    <a
                      href={`./group/${this.props.expense.group.id}/${this.props.expense.group.name}`}
                      className="group-link"
                    >
                      <small className="text-secondary group-expense-link">
                        {this.props.expense.group.name}
                      </small>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between expenses-child-2">
                <div className="d-flex flex-column align-items-end mr-3 w-50">
                  <small className="text-secondary text-truncate">
                    {this.payer(this.props.expense.users)} paid
                  </small>
                  <span className="font-weight-bold">
                    &#x20b9;{this.props.expense.cost}
                  </span>
                </div>
                <div className="d-flex flex-column w-50">
                  <small className="text-secondary text-truncate">
                    you
                    {+this.props.expense.users[this.props.currentUser]
                      .netBalance > 0
                      ? " lent"
                      : " borrowed"}
                  </small>
                  <span
                    className={
                      +this.props.expense.users[this.props.currentUser]
                        .netBalance > 0
                        ? "font-weight-bold colorBlue"
                        : "font-weight-bold orange-color"
                    }
                  >
                    &#x20b9;
                    {this.props.expense.users[this.props.currentUser]
                      .netBalance > 0
                      ? this.props.expense.users[this.props.currentUser]
                          .netBalance
                      : -this.props.expense.users[this.props.currentUser]
                          .netBalance}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {this.state.showExpenseDetails ? (
            <ExpenseDetail
              expense={this.props.expense}
              currentUser={this.props.currentUser}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default ShowExpenses;
