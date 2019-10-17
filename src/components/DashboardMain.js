import React, { Component,Main} from 'react';
import Header from './layouts/Header';
import LeftSidebar from '../components/layouts/dash/LeftSidebar';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import Dash from './dashboardInner';
import Expense from './Expenses/expense'
import AllExpenses from "./AllExpences";

export class DashboardMain extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container" style={{display:'flex'}}>
          <div className="row">
            <div className="left-sidebar col-md-3">
              <LeftSidebar {...this.props} />
            </div>
    <Route exact path="/dash/main" render = {props => ( <Dash {...props} />)}/>
    <Route exact path="/expenses" render = {props => ( <AllExpenses {...props} />)}/>
    <Route exact path="/dash/friend/:name" render = {props => ( <Expense {...props} />)}/>
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
    );
  }
}
function URLcheck(props) {
  console.log(props);
  return <Dash />
}

export default DashboardMain;
