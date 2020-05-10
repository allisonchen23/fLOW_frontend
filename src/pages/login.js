// //Home Page
// import { withOktaAuth } from '@okta/okta-react';
// import React, { Component} from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Security } from '@okta/okta-react';
// import './about.css';
// import './globalstyle.css';

// const CALLBACK_PATH = '/implicit/callback'
// const config = {
//     clientID: '0oab1nbg80ysLiu1U4x6',
//     issuer: 'https://$dev-181621/oauth2/default',
//     redirectUri: 'http://localhost:8080/implicit/callback',
//     scopes: ['openid', 'profile', 'email'],
//     pkce: true
// };

// export default withOktaAuth(class Login extends Component { 
//   constructor(props) {
//     super(props);
//     this.login = this.login.bind(this);
//   }

//   async login() {
//     this.props.authService.login('/profile');
//   }
  
//   render() {
//     return (
//         <React.Fragment>
//           <div className="body">
//             <div className="body_wrap">
//               <div className="body_container">
//                   <h3>Hi</h3>
//                 <Router>
//                   <Security {...config}>
//                     <Route path={CALLBACK_PATH} />
//                     </Security>
//                 </Router>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//     );
//   }
// });

//export default Login;


import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: '',
      issuer: 'https://$dev-181621/oauth2/default'
    };

    this.oktaAuth = new OktaAuth({ issuer: 'https://$dev-181621/oauth2/default' });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      const sessionToken = res.sessionToken;
      this.setState(
        { sessionToken },
        // sessionToken is a one-use token, so make sure this is only called once
        () => this.props.authService.redirect({sessionToken})
      );
    })
    .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      // Hide form while sessionToken is converted into id/access tokens
      return null;
    }

    return (
      <React.Fragment>
      <div className="body">
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            id="username" type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            id="password" type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </label>
        <input id="submit" type="submit" value="Submit" />
      </form>
      </div>
      </React.Fragment>
    );
  }
});