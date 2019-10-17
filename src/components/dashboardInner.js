import React, { Component } from 'react';


class Dash extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
              <div className="dash-main-content col-md-6">
                            <div className="dash-header p-3">
                                <div className="row">
                                    <h4 className="mr-auto">Dashboard</h4>
                                    <div className="dash-header-right ml-auto">
                                        <button className="btn btn-orange">Add an expense</button>
                                        <button className="btn btn-blue ml-2">Settle up</button>
                                    </div>
                                </div>
                            </div>
                            <div className="content-dash p-5">
                                <div className="row">
                                    <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png" alt="blue-man" className="blue-person mr-auto col-md-4" />
                                    <div className="content-dash-right ml-auto col-md-8">
                                        <h3>You’re all settled up.<br /> Awesome!</h3>
                                        <p>To add a new expense, click the orange “Add an expense” button.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default Dash;