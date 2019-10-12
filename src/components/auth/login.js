import React, { Component } from 'react';
import Header from '../nav'
import {Link} from 'react-router-dom'

class login extends Component {
    constructor(){
        super();
    }
    render() { 
        return (
         <React.Fragment>
            <Header />
            <div className = "container main">
                <div className = "row">
                    <div className = "logo">
                        <img src = "https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt = "logo" />
                    </div>
                    <div className = "form signup">
                        <form>
                            <h6 className = "introText">WELCOME TO SPLITWISE</h6>
                            <h6>Email address</h6>
                            <div className = "form-group">
                                <input type = "text" className = "form-control"/>
                            </div>
                            <div className = "loginCred">
                                <div className = "form-group">
                                    <h6>Password</h6>
                                    <input type = "email" className = "form-control"/>
                                </div>
                            </div>
                            <Link to={'./dashboard'}>
                            <button type = "submit" className = "btn signUpBtn">Log in</button>
                            </Link>
                            <p className='forgetPassword'>Forgot your password? <a href =''> Click here</a></p>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default login;