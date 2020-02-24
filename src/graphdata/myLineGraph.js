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
                        pointColor: "#97D1F4",
                        pointStrokeColor: "#fff"
                    }
                ]
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
                        fontColor: '#d1d1d1',
                      },
                      ticks: {
                        padding: 10,
                        fontColor: '#eeeeee'
                      },
                      gridLines: {
                        borderDash: [8,4],
                        color: '#eeeeee',
                        drawTicks: false,
                        drawBorder: false
                      }

                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: '#eeeeee'                                
                        },
                        ticks: {
                            padding: 10,
                            fontColor: '#d1d1d1'
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