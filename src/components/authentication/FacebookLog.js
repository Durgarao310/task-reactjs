'use strict';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import fbLogin from './Facebook'
import { withRouter } from 'react-router-dom';

class FacebookSocialAuth extends Component {
  render() {
    const responseFacebook = async (response) => {
        console.log(response)
        let fbResponse  = await fbLogin(response.accessToken)
        console.log(fbResponse);
        console.log(response.accessToken)
        localStorage.setItem("authToken", response.accessToken)
        // history.goBack()
        console.log(response);
                this.props.history.goBack()
      }
    return (
      <div className="App">
        <br></br>
        <FacebookLogin
          textButton="acebook"
          appId= ""
          fields="name,email,picture"
          cssClass="button  is-link fab fa-facebook"
          callback={responseFacebook}      
        
        />
      </div>
    );
  }
}

export default withRouter(FacebookSocialAuth);