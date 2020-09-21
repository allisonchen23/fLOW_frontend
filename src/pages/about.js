//Home Page
import React, { Component} from 'react';
import Select from 'react-select';

import './about.css';
import './globalstyle.css';
import LineGraph from "../graphdata/myLineGraph.js";
import classes from "./home.css";

let DaysOfWeek = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};
let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let opt = {
  "Device 1": 1,
  "Device 2": 2
};
class About extends Component { 
  constructor() {
    super();
    this.state = {
      filteredData: [1, 2, 3],
      labels: ['one', 'two', 'three'],
      startDate: 0,
      endDate: 0,
      selectOptions: [],
      selectedDevices: "",
    };
  }

  componentDidMount() {
    this.getAvailableUserIDs();
    this.getData("1");
  }

  async getAvailableUserIDs() {
    let xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        let uniqueIds = JSON.parse(xhr.responseText);
        let selectOptions = [];
        for (let id of uniqueIds) {
          selectOptions.push({label: `Device ${id}`, value: id});
        }
        this.setState({ selectOptions: selectOptions});
      });
      xhr.open('GET', 'http://129.146.137.152:3000/available_user_ids')
      xhr.send();
  }

  
  getData(idString) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      let response = JSON.parse(xhr.responseText)
      let filteredData = [];
      let labels = [];
      let date;
      let volume;
      let timestamp;
      let startDate;
      let endDate;
      console.log(response)
      let keys = Object.keys(response)
      for (let i = 0; i < keys.length; i++) {
      // for (let timestamp in response) {
        timestamp = keys[i];
        date = new Date(parseInt(timestamp, 10) * 1000);
        if (i == 0) {
          startDate = DaysOfWeek[date.getDay()] + ", " + Months[date.getMonth()] + " " + date.getDate();
        }
        else if (i == keys.length - 1) {
          endDate = DaysOfWeek[date.getDay()] + ", " + Months[date.getMonth()] + " " + date.getDate();
        }
        volume = response[timestamp];
        filteredData.push(volume);
        labels.push(DaysOfWeek[date.getDay()]);
        console.log(date + " " + volume);
      }
      console.log(labels);
      this.setState({
        filteredData: filteredData,
        labels: labels,
        startDate: startDate,
        endDate: endDate 
      });
    });

    xhr.open('GET', `http://129.146.137.152:3000/dailysum/${idString}`);
    xhr.send();
  }

  onSelectChange = (opt) => {
    let ids = "";
    // for (let entry of opt) {
    //   ids.push(entry["value"]);
    // }
    console.log(opt);
    for (let i = 0; i < opt.length; i++) {
      ids += opt[i]["value"];
      // console.log(opt[i]);
      if (i < opt.length - 1) {
        ids += "_";
      }
    }
    this.setState({selectedDevices: ids});
  }

  submitButton = () => {
    let idString = this.state.selectedDevices;
    this.getData(idString);
  }
  render() {
    return (
        <React.Fragment>
          <div className="body">
            <div className="body_wrap">
              <div className="body_container flex_container">
              {/* <div className="body_box full_width double_height"> */}
                <div className="body_box select_menu " id="message_box">
                  <Select 
                    isMulti
                    onChange={this.onSelectChange}
                    options={this.state.selectOptions}/>
                  <button className="centered" onClick={this.submitButton} >
                    Reload Graph
                  </button>
                </div>
                <div id="graph_wrap">
                  <div id="graph_htmlcontainer">
                    <div className={classes.container}>
                      <header>
                        <h2>Your Usage History</h2>
                      </header>
                      <LineGraph
                        data={this.state.filteredData}
                        labels={this.state.labels} />
                    </div>
                  </div>
                </div>
                <div>
                  <p>Start Date: {this.state.startDate}</p>
                  <p>End Date: {this.state.endDate}</p>
              </div>
              </div> 
              
              {/* </div> */}
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default About;