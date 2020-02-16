//Home Page
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import './home.css';
import logo from '../assets/svg/flow_logo.svg';
import firebase from "../firebase"
// Imports icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'


// Adds icons
library.add(faHome, faSignal, faClock, faLightbulb, faQuestionCircle, faUserCircle);

console.log(logo);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daily_sums: {},
      volume: 0
    }
  }
  getDaysData = (db) => {

    let sumsRef = db.ref('daily_sums');
    sumsRef.once('value').then(snapshot => {
      let db_days = snapshot.val();
      this.setState({ daily_sums: db_days });
    })
    // this.setState({ daily_sums: sumsRef.once('value').snapshot.val()});
  }
  updateDays = (day_index, new_vol) => {
  }
  componentDidMount = () => {
    let db = firebase.database();
    this.getDaysData(db);
    let dataRef = db.ref('graph_dummy');
    let volume = 0;
    dataRef.on('value', snapshot => {
      const data = snapshot;
      //each child snapshot is an entry from arduino
      data.forEach(childSnapshot => {
        volume = volume + childSnapshot.child('volume').val();
        console.log(volume);

      })
      this.setState({ volume: volume });
    })
  }
  render() {
    console.log(this.state.volume);
    return (
      <React.Fragment>
        <div className="body">
          <div className="body_wrap">
            <div className="body_container">
              <div className="body_box long" id="message_box">
                <div className="box_content">
                </div>
              </div>
              <div className="body_box">
                <div className="box_content">
                </div>
              </div>
              <div className="body_box">
                <div className="box_content">

                </div>
              </div>
              <div className="body_box full_width double_height">
                <div className="box_content">
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;