import React, { Component } from "react";
import fire from "../../config/fire";
import GroupMember from "./GroupMember";

class group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupDetails: {}
    };
  }
  getGroupDetails = async () => {
    const groupDetails = await fire
      .firestore()
      .collection("group")
      .doc(this.props.match.params.groupId)
      .get();
    console.log(groupDetails.data());
    this.setState({ groupDetails: groupDetails.data() });
  };
  componentDidMount() {
    this.getGroupDetails();
  }
  render() {
    return (
      <React.Fragment>
        {console.log(this.state.groupDetails)}
        <div className="dash-main-content col-md-6">
          <div className="dash-header p-3">
            <div className="row">
              <h4 className="mr-auto">{this.state.groupDetails.name}</h4>
              <div className="dash-header-right ml-auto">
                <button className="btn btn-orange">Add an expense</button>
                <button className="btn btn-blue ml-2">Settle up</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar col-md-3">
          {this.state.groupDetails.Members &&
            this.state.groupDetails.Members.map(member => {
              return <GroupMember member={member} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}
export default group;
