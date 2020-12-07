import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

require('dotenv').config();

const {
  REACT_APP_GOOGLE_LOGIN_API_KEY
} = process.env;


const CLIENT_ID = `${REACT_APP_GOOGLE_LOGIN_API_KEY}`;


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }


 
  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
{/*shows you the access token */}   
<div style={{ marginLeft: "-1800px" ,paddingTop: "0%", paddingBottom: "60%" , paddingLeft: "100%"}} >
 { this.state.accessToken ? <h6>Your User Key is :{ this.state.accessToken }</h6> : null }
 </div>
    </div>
    )
  }
}

export default GoogleBtn;