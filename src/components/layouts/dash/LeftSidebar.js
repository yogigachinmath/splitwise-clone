import React, { Component } from 'react';
import UserPic from "../user.png";
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Modal from './friends/modal'

export class LeftSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends:['yogi','yogi']
          }
          this.handleAddfriend = this.handleAddfriend.bind(this);
    }
    handleAddfriend(friendusername,friendemail){ 
        console.log(friendusername);
        this.setState({
          friends:friendusername
        })
      }
    handleChangeOverClick = (e) => {
        document.querySelectorAll('.sidebarText').forEach((element) => {
            element.classList.remove('colorBlue');
        })
        e.target.classList.add('colorBlue');
        if(e.target.classList.contains('dashClass')) {
            console.log("Class list");
            e.target.previousSibling.classList.remove('grayImg');
        }
    }
    render() {
        return (
            <BrowserRouter>
            <div>
                <div className="row mt-3">
                    <img src="/img/logo1.svg" className="logoDash grayImg" alt="logo" />
                    <span className="sidebarText dashClass ml-2 lh" onClick={this.handleChangeOverClick}>Dashboard</span>
                </div>
                <div className="row">
                    <span className="fa fa-flag"></span>
                    <span className="sidebarText colorBlue ml-2 lh">Recent activity</span>
                </div>
                <div className="row mt-2">
                    <span className="fa fa-bars"></span>
                    <span className="sidebarExpensesText ml-2 lh">All expenses</span>
                </div>
                <div className="groupSidebar">
                    <div className="row bg-light text-secondary px-2">
                        <span className="labelListsSidebar mr-auto">Groups</span>
                        <span className="addSidebar"><span className="addIcon fa fa-plus mr-1"></span>add</span>
                    </div>
                    <div className="appendGroupNames ml-3">
                        <p className="textGroups"><span className="fa fa-tag mr-2"></span>Test</p>
                        <p className="textGroups"><span className="fa fa-tag mr-2"></span>Test</p>
                        <p className="textGroups"><span className="fa fa-tag mr-2"></span>Test</p>
                    </div>
                </div>
                <div className="friendsSidebar">
                    <div className="row bg-light text-secondary px-2">
                        <span className="labelListsSidebar mr-auto">Friends</span>
                        <Link to = {`${this.props.location.pathname}addfriend`}>
                             <span className="addSidebar"><span className="addIcon fa fa-plus mr-1"></span>add</span>
                        </Link>
                    </div>
                    <div className="appendFriendNames ml-3">
                    {this.state.friends.map(val => <p className="textGroups"><span className="fa fa-tag mr-2"></span>{val}</p>)}
                    </div>
                </div>
            </div>
             <Route path = {`${this.props.location.pathname}addfriend`} render={props => <Modal  friends = {this.state.friends} handleAddfriend = {this.handleAddfriend} {...this.props} /> }/>
            </BrowserRouter>
        )
    }
}

export default LeftSidebar
