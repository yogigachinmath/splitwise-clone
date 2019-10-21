import React, { Component } from 'react';
import fire from '../../config/fire';

class group extends Component{
    constructor(props){
        super(props);
       this.state = {
           groupDetails:{}
       }
    }
    async componentDidMount(){
       const getGroupDetails = await fire.firestore().collection('group').doc(`${this.props.match.params.groupId}`).get();
    //    console.log(getGroupDetails.data());
       this.setState({
        groupDetails: getGroupDetails.data()
       })
    }
    render(){
        return(
            <div>
                {console.log(this.state)}
                hello
            </div>
        )
    }
}
export default group;