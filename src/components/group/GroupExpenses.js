import React, { Component } from "react";
import ShowExpense from "../ShowExpenses";

class GroupExpenses extends Component {
  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.expenses).length !== 0 &&
          Object.keys(this.props.expenses).map(expenseId => {
            return (
              <ShowExpense
                expense={this.props.expenses[expenseId]}
                currentUser={this.props.currentUser}
              />
            );
          })}
      </React.Fragment>
    );
  }
}

export default GroupExpenses;
