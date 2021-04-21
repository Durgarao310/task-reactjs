import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from './Google'
import { withRouter } from 'react-router-dom';

class GoogleSocialAuth extends Component {
  render() {
    const responseGoogle = async(response) => {
        console.log(response)
        let googleResponse  = await googleLogin(response.accessToken)
        console.log(googleResponse);
        console.log(response);
        localStorage.setItem("authToken", response.accessToken)
        this.props.history.goBack()
      }
    return (
      <div className="App">
        <GoogleLogin
          render={renderProps => (
            <button className="button is-danger" onClick={renderProps.onClick} disabled={renderProps.disabled}> <i className="fab fa-google text-link">oogle</i></button>
          )}
          buttonText="Login"
          clientId=""
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default withRouter(GoogleSocialAuth);