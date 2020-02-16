import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./myLineGraph";
import chartIcon from "../assets/svg/chart-icon.svg";
import { volWater, dayLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
        data: volWater,
        labels: dayLabels
    }

    render() {
        const { data, labels } = this.state;
        return (
            <div className={classes.container}>
            <header>
                <img src={chartIcon} alt="bar chart icon" />
                <h1>Water Dashboard</h1>
            </header>
                <LineGraph
                    data={data}
                    labels={labels} />
            </div>
        )
    }
}
