import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1070267666084-mhqlu3473t4psri2eef6q3vr0pr09n0v.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Eu não sei se estamos registrados</div>;
    } else if (this.state.isSignedIn) {
      return <div>Eu estou registrada!</div>;
    } else {
      return <div>Eu não estou registrada!</div>;
    }
  }

  render() {
    return <li>{this.renderAuthButton()}</li>;
  }
}

export default GoogleAuth;
