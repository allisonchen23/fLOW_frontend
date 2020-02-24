import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./myLineGraph";
import { dayLabels } from "./mockData";
import firebase from "../firebase"


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          labels: dayLabels,
        };
      }

    componentDidMount = () => {
        let db = firebase.database();
        let dataRef = db.ref('graph_dummy');
        var volume = [];
        dataRef.on('value', snapshot =>{
          const data = snapshot;
          data.forEach(childSnapshot => {
            volume.push(childSnapshot.child('volume').val());
          })
          this.setState({ data: volume })
        })
    }


    render() {
        const { data, labels } = this.state;
        return (
            <div className={classes.container}>
                <LineGraph
                    data={data}
                    labels={labels} />
            </div>
        )
    }
}
