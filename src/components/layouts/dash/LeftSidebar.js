import React, { Component } from 'react';
import UserPic from "../user.png";

export class LeftSidebar extends Component {
    render() {
        return (
            <div>
                <div className="row mt-3">
                    <img src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" className="logoDash" alt="logo" />
                    <span className="sidebarText ml-2 lh">Dashboard</span>
                </div>
                <div className="row">
                    <span className="fa fa-flag"></span>
                    <span className="sidebarText ml-2 lh">Recent activity</span>
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
                        <span className="addSidebar"><span className="addIcon fa fa-plus mr-1"></span>add</span>
                    </div>
                    <div className="appendFriendNames ml-3">
                        <p className="textFriends"><img src={UserPic} className="friendPic mr-2" alt="friend" />TestFriend</p>
                        <p className="textFriends"><img src={UserPic} className="friendPic mr-2" alt="friend" />TestFriend</p>
                        <p className="textFriends"><img src={UserPic} className="friendPic mr-2" alt="friend" />TestFriend</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSidebar
