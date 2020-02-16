//Data & Graph Page
import React, { Component, Fragment } from 'react';

import firebase from '../firebase.js';

import './data.css';
import Dashboard from "../graphdata/Dashboard.js"

class Data extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          temp: "0",
          name: "",
          name2: "",
        };
      }
    
      //lifecylce function of Components
      //called only once 
      increment_temp = () => {
        var past_temp = this.state.temp;
        this.setState({ temp: past_temp + 1 });
      }
      componentDidMount = () => {
        //var userID = firebase.auth().currentUser.uid;
        firebase.database.enableLogging(true);
        let db = firebase.database();
        var curtemp;
        let tempRef = db.ref('temp'); //
        let imageRef = db.ref('image');
        let nameRef = db.ref('image/name');
    
    
    // if speed the database was more of a tree like the following:
        // temp:
        //   humidity:
        //   airspeed:
        // access humidity from .ref('temp/humidity')
        // then access value of humidity with speed.humidity
        //these are called listneners, run asynchronously
        tempRef.on('value', (snapshot) => {
          curtemp = snapshot.val();
          this.setState({ temp: curtemp });
        });
        imageRef.on('value', snapshot => {
          let db_name= snapshot.child('name').val();
          this.setState({name: db_name});
        });
        nameRef.on('value', snapshot => {
          this.setState({name2: snapshot.val()});
        });
    
    
      }
      
  render() {
    return (
        <React.Fragment>
          <Dashboard/>

          <header className="data">
            <p>From database: {this.state.temp}</p>
            <p>Image/Name: {this.state.name}</p>
            <p>should be same value as above: {this.state.name2}</p>
          </header>

        </React.Fragment>
    );
  }
}

export default Data;