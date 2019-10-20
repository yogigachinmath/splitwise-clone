import React, { Component } from 'react';
import Header from './layouts/Header';
import LeftSidebar from '../components/layouts/dash/LeftSidebar';
import fire from '../config/fire';
import { BrowserRouter, Route } from 'react-router-dom';
import Dash from './dashboardInner';
import Expense from './Expenses/expense';
import AllExpenses from './AllExpenses';
import { resolve } from 'path';

export class DashboardMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      expenseData: [],
    };
  }
  // we have to fetch the names by querying to users collection
  componentDidMount() {
     async function getuser(){
      return new Promise(async (resolve,reject)=> {
        await fire.auth().onAuthStateChanged(async user => {
          if (user) {
              resolve(user);
              return ;
          }
          reject('error');
      })  
      }) 
     }
     getuser().then(val => this.setState({
       user:val
     }));
}
  //   f3qC7AmBDnaC4uODf1HzNWyy6W72 - new
  //   Tlpa5fQ5lUdQmuq4x9I91PW6GCD3 - 2
  render() {
    return (
      <BrowserRouter>
        <Header userDetails={this.state.user} />
        <div className="container" style={{ display: 'flex' }}>
          <div className="row">
            <div className="left-sidebar col-md-3">
              <LeftSidebar {...this.props} />
            </div>
            <Route
              exact
              path="/dash/main"
              render={props => <Dash {...props} {...this.state} />}
            />
            <Route
              exact
              path="/expenses"
              render={props => <AllExpenses {...props} />}
            />
            <Route
              exact
              path="/dash/friend/:name"
              render={props => <Expense {...props} />}
            />
            <div className="right-sidebar col-md-3">
              <img
                src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                className="logo-dash-right ml-2 mt-2"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
function URLcheck(props) {
  console.log(props);
  return <Dash />;
}

export default DashboardMain;

// har ek transaction par friend
// ek ek ko dash mai nhi dikhana - sirf hisab settlements
// pura object mai sab ko compare krke nikalna hga - common hisabs
// group ka v dkhna hga - agar grp mai wahi frnd hua tha to wo hisab v
// overall hisab frnd wise
