//Home Page
import React, { Component} from 'react';
import Select from 'react-select';

import './about.css';
import './globalstyle.css';
import LineGraph from "../graphdata/myLineGraph.js";
import classes from "./home.css";

let DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class About extends Component { 
  constructor() {
    super();
    this.state = {
      filteredData: [],
      labels: [],
      startDate: 0,
      endDate: 0,
      selectOptions: [],
      selectedDevices: "",
    };
  }

  componentDidMount() {
    this.getAvailableUserIDs();
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
    if (!idString) {
      alert("Please select at least 1 device to view data.");
      return;
    }
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      let response = JSON.parse(xhr.responseText)
      let filteredData = [];
      let labels = [];
      console.log(response)
      let keys = Object.keys(response)
      let startDate = new Date(parseInt(keys[0], 10) * 1000);
      let startDay = startDate.getDay();
      let startDateString = DaysOfWeek[startDate.getDay()] + ", " + Months[startDate.getMonth()] + " " + startDate.getDate();
      let endDate = new Date(parseInt(keys[keys.length-1], 10) * 1000);
      let endDateString = DaysOfWeek[endDate.getDay()] + ", " + Months[endDate.getMonth()] + " " + endDate.getDate();
      
      labels = DaysOfWeek.slice(startDay, startDay + 7);
      filteredData = Object.values(response)
      console.log("labels: " + labels);
      console.log("startDate: " + startDateString);
      console.log("endDate: " + endDateString);

      this.setState({
        filteredData: filteredData,
        labels: labels,
        startDate: startDateString,
        endDate: endDateString 
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
  
  parseDevicesSelected = () => {
    let deviceString = this.state.selectedDevices;
    return deviceString.replace("_", ", ");
  }
  render() {
    return (
        <React.Fragment>
          <div className="body">
            <div className="body_wrap">
              <div className="body_container flex_container">
              {/* <div className="body_box full_width double_height"> */}
                <div>
                  <p>Please select the devices you would like to view data for.</p>
                </div>
                <div className="body_box select_menu " id="message_box">
                  <Select 
                    isMulti
                    onChange={this.onSelectChange}
                    options={this.state.selectOptions}/>
                  <button className="button" onClick={this.submitButton} >
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
                  <p>Devices included (ID): {this.parseDevicesSelected()}</p>
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