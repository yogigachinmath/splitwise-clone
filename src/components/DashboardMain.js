import React, { Component } from 'react';
import Header from './layouts/Header';

export class DashboardMain extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <h1 className="mt-4"><center>Welcome to Splitwise Dashboard</center></h1>
            </React.Fragment>
        )
    }
}

export default DashboardMain
