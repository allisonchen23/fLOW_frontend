//Home Page
import React, { Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './about.css';
import './globalstyle.css';

const CALLBACK_PATH = '/implicit/callback'
const config = {
    clientID: '0oab1nbg80ysLiu1U4x6',
    issure: 'https://dev-181621'
};

class Login extends Component { 
  render() {
    return (
        <React.Fragment>
          <div className="body">
            <div className="body_wrap">
              <div className="body_container">
                  <h3>Hi</h3>
                <Router>
                    <Route path={CALLBACK_PATH} />
                </Router>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Login;