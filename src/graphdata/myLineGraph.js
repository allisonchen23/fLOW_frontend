import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif"
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
        const {height: graphHeight} = myChartRef.canvas;

        let gradientLine = myChartRef
        .createLinearGradient(0, 0, 0, graphHeight);
        gradientLine.addColorStop(0, "rgb(151, 209, 244, .5)");
        gradientLine.addColorStop(0.5, "rgb(151, 209, 244, .1)");
        gradientLine.addColorStop(1, "rgb(151, 209, 244, 0)");

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
                        borderColor: "#97D1F4",
                        backgroundColor: gradientLine,
                        pointBackgroundColor: "#97D1F4",
                        pointRadius: 3,
                        hitRadius: 30,
                        pointStrokeColor: "#fff"
                    }
                ]
            },
            plugins: {
                zoom: {
                    // Container for pan options
                    pan: {
                        // Boolean to enable panning
                        enabled: true,
            
                        // Panning directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow panning in the y direction
                        // A function that is called as the user is panning and returns the
                        // available directions can also be used:
                        //   mode: function({ chart }) {
                        //     return 'xy';
                        //   },
                        mode: 'xy',
            
                        rangeMin: {
                            // Format of min pan range depends on scale type
                            x: null,
                            y: null
                        },
                        rangeMax: {
                            // Format of max pan range depends on scale type
                            x: null,
                            y: null
                        },
            
                        // Function called while the user is panning
                        onPan: function({chart}) { console.log(`I'm panning!!!`); },
                        // Function called once panning is completed
                        onPanComplete: function({chart}) { console.log(`I was panned!!!`); }
                    }
                }
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    displayColors: false,
                },
                scales: {
                    yAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Volume (ml)',
                        fontColor: '#666666',
                      },
                      ticks: {
                        padding: 10,
                        fontColor: '#666666'
                      },
                      gridLines: {
                        display: false,
                        borderDash: [8,4],
                        color: '#666666',
                        drawTicks: false,
                        drawBorder: false
                      }

                    }],
                    xAxes: [{
                        gridLines: {
                            borderDash: [8,4],
                            color: '#eeeeee',
                            drawTicks: false,
                            drawBorder: false                               
                        },
                        ticks: {
                            padding: 10,
                            fontColor: '#666666'
                          }
                    }]
                  },

            },
            
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