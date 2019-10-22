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
       console.log('ooooo');
       this.setState({
        groupDetails: getGroupDetails.data()
       })
    }
    async componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.groupName!==this.props.match.params.groupName){
            console.log('gdfd');
            const getGroupDetails = await fire.firestore().collection('group').doc(`${this.props.match.params.groupId}`).get();
            console.log('ooooo');
            this.setState({
             groupDetails: getGroupDetails.data()
            })
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                hello
            </div>
        )
    }
}
export default group;