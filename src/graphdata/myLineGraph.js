import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'Open-Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//


export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Volume",
                        data: data,
                        fill: true,
                        borderColor: "palevioletred",
                        //pointStrokeColor : "#fff"
                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: true,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Volume'
                      }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Day'
                        }
                    }]
                  },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });

    }

    render() {


        return (
            
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}