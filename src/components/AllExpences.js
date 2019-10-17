import React, { Component } from "react";
import Header from "./layouts/Header";
import LeftSidebar from "../components/layouts/dash/LeftSidebar";
import ExpenseDetail from "./ExpenseDetail";
import "./expenses.css";
import $ from "jquery";

class Expense extends Component {
  state = { showExpenseDetails: false };
  showDetails = e => {
    if (this.state.showExpenseDetails === false) {
      this.setState({ showExpenseDetails: true });
    } else {
      this.setState({ showExpenseDetails: false });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="expense" onClick={this.showDetails}>
          <div className="row expence-row line-height-18 border border-top-0 border-left-0 border-right-0">
            <div className="d-flex justify-content-between container">
              <div className="d-flex expenses-child ">
                <div className="d-flex flex-column mr-2 text-secondary">
                  <small>Oct</small>
                  <h5 className="line-height-18">14</h5>
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
                  {this.props.expense.groupId ? (
                    <a href="#">
                      <small className="text-secondary group-expense-link">
                        Hacker
                      </small>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-between expenses-child">
                <div className="d-flex flex-column mr-3">
                  <small className="align-self-sm-end text-secondary">
                    you paid
                  </small>
                  <span className="font-weight-bold">
                    INR {this.props.expense.cost}
                  </span>
                </div>
                <div className="d-flex flex-column ">
                  <small className="text-secondary">you lent</small>
                  <span className="font-weight-bold lent-color">
                    INR
                    {this.props.expense.repayments.reduce(
                      (lentAmount, repayment) => {
                        let totalAmount = lentAmount;
                        totalAmount += repayment.amount;
                        return totalAmount;
                      },
                      0
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {this.state.showExpenseDetails ? (
            <ExpenseDetail expense={this.props.expense} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
export class DashboardMain extends Component {
  state = {
    currentUser: "user1",
    expenses: {
      expense1: {
        description: "Food",
        creationMethod: "equal",
        groupId: "group1",
        cost: 400,
        repayments: [
          {
            from: "user2",
            to: "user1",
            amount: 133.33
          },
          {
            from: "user3",
            to: "user1",
            amount: 133.33
          }
        ],
        createdBy: "user1",
        createAt: "date"
      },
      expense2: {
        description: "Taxi",
        creationMethod: "equal",
        cost: 400,
        repayments: [
          {
            from: "user3",
            to: "user1",
            amount: 200.0
          }
        ],
        createdBy: "user1",
        createAt: "date"
      },
      expense3: {
        description: "Stationary",
        creationMethod: "equal",
        groupId: "group1",
        cost: 600,
        repayments: [
          {
            from: "user2",
            to: "user1",
            amount: 200
          },
          {
            from: "user3",
            to: "user1",
            amount: 200
          }
        ],
        createdBy: "user1",
        createAt: "date"
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="left-sidebar col-md-3">
              <LeftSidebar {...this.props} />
            </div>
            <div className="dash-main-content col-md-6">
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
                  <Expense expense={this.state.expenses[expense]} />
                  // <div className="expense" onClick={this.showDetails}>
                  //   <div className="row expence-row line-height-18 border border-top-0 border-left-0 border-right-0">
                  //     <div className="d-flex justify-content-between container">
                  //       <div className="d-flex expenses-child ">
                  //         <div className="d-flex flex-column mr-2 text-secondary">
                  //           <small>Oct</small>
                  //           <h5 className="line-height-18">14</h5>
                  //         </div>
                  //         <img
                  //           className="expense-img mr-2"
                  //           src="/img/general@2x.png"
                  //           alt=""
                  //         />
                  //         <div className="d-flex flex-column">
                  //           <a
                  //             className="expense-heading text-truncate font-weight-bold"
                  //             href="/"
                  //           >
                  //             {this.state.expenses[expense].description}
                  //           </a>
                  //           {this.state.expenses[expense].groupId ? (
                  //             <a href="/">
                  //               <small className="text-secondary group-expense-link">
                  //                 Hacker
                  //               </small>
                  //             </a>
                  //           ) : (
                  //             ""
                  //           )}
                  //         </div>
                  //       </div>
                  //       <div className="d-flex justify-content-between expenses-child">
                  //         <div className="d-flex flex-column mr-3">
                  //           <small className="align-self-sm-end text-secondary">
                  //             you paid
                  //           </small>
                  //           <span className="font-weight-bold">
                  //             INR {this.state.expenses[expense].cost}
                  //           </span>
                  //         </div>
                  //         <div className="d-flex flex-column ">
                  //           <small className="text-secondary">you lent</small>
                  //           <span className="font-weight-bold lent-color">
                  //             INR
                  //             {this.state.expenses[expense].repayments.reduce(
                  //               (lentAmount, repayment) => {
                  //                 let totalAmount = lentAmount;
                  //                 totalAmount += repayment.amount;
                  //                 return totalAmount;
                  //               },
                  //               0
                  //             )}
                  //           </span>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  //   {this.state.showExpenseDetails ? (
                  //     <ExpenseDetail expense={this.state.expenses[expense]} />
                  //   ) : null}
                  // </div>
                );
              })}
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
