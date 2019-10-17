import React, { Component } from 'react';
import Header from './layouts/Header';
import LeftSidebar from '../components/layouts/dash/LeftSidebar';
import './expenses.css';

export class DashboardMain extends Component {
  state = {
    currentUser: 'user1',
    expenses: {
      expense1: {
        description: 'Food',
        creationMethod: 'equal',
        groupId: 'group1',
        cost: 400,
        repayments: [
          {
            from: 'user2',
            to: 'user1',
            amount: 133.33
          },
          {
            from: 'user3',
            to: 'user1',
            amount: 133.33
          }
        ],
        createdBy: 'user1',
        createAt: 'date'
      }
    },
    expense2: {
      description: 'Food',
      creationMethod: 'equal',
      cost: 400,
      repayments: [
        {
          from: 'user3',
          to: 'user1',
          amount: 133.33
        }
      ],
      createdBy: 'user1',
      createAt: 'date'
    }
  };
  render() {
    return (
      <React.Fragment>
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
          <div className="row expence-row line-height-18">
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
                    href="/"
                  >
                    Fooddhdfdjhvbhsbfhsdbhfdsbhfbsdhfbhsdbhjb
                  </a>
                  <a href="/">
                    <small className="text-secondary group-expense-link">
                      Hacker
                    </small>
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-between expenses-child">
                <div className="d-flex flex-column mr-3">
                  <small className="align-self-sm-end text-secondary">
                    you paid
                  </small>
                  <span className="font-weight-bold">INR 200.00</span>
                </div>
                <div className="d-flex flex-column ">
                  <small className="text-secondary">you lent</small>
                  <span className="font-weight-bold lent-color">
                    INR 160.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row expence-row">
            <div className="d-flex justify-content-between container">
              <div className="d-flex expenses-child">
                <div className="d-flex flex-column mr-2">
                  <small>Oct</small>
                  <h5>14</h5>
                </div>
                <img
                  className="expense-img mr-2"
                  src="/img/general@2x.png"
                  alt=""
                />
                <div className="d-flex flex-column">
                  <h6>Food12</h6>
                  <h6 className="h-25">
                    <small>Hacker</small>
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-between expenses-child">
                <div className="d-flex flex-column">
                  <small className="align-self-sm-end">you paid</small>
                  <span>INR 200.00</span>
                </div>
                <div className="d-flex flex-column">
                  <small>you lent</small>
                  <span>INR 160.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar col-md-3">
          <img
            src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
            className="logo-dash-right ml-2 mt-2"
            alt="logo"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardMain;
