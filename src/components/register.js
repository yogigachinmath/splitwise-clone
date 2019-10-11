import React, { Component } from 'react'
import  { Link } from 'react-router-dom';

export class register extends Component {
    displayContentOnChange = (e) => {
        e.target.parentElement.nextSibling.style.display = "block";
    }
    render() {
        return (
            <div className = "container main">
                <div className = "row">
                    <div className = "logo">
                        <img src = "https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt = "logo" />
                    </div>
                    <div className = "form signup">
                        <form>
                            <h6 className = "introText">Introduce yourself</h6>
                            <h3>Hi there! My name is</h3>
                            <div className = "form-group">
                                <input type = "text" className = "form-control" onChange = {this.displayContentOnChange}/>
                            </div>
                            <div className = "displayOnChange">
                                <div className = "form-group">
                                    <h6>Here's my <b>email address</b>:</h6>
                                    <input type = "email" className = "form-control"/>
                                </div>
                                <div className = "form-group">
                                    <h6>And here's my <b>password</b>:</h6>
                                    <input type = "password" className = "form-control" autoComplete = "new-password" />
                                </div>
                            </div>
                            <Link to ={'./dashboard'}>    
                            <button type = "submit" className = "btn signUpBtn">Sign me up!</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default register
