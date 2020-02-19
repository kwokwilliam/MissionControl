import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";
import Temperature from "./temperature-component";
import DataPacket from "../types";
import CoordinatesComponent from "./coordinates-component";
import  *  as  data  from  './data.json';

type DashProps = {
  sensors: DataPacket;
};

var parsedData = JSON.parse(JSON.stringify(data)).default;
var x = parsedData.GPS[0].Latitude;

class DashComponent extends React.Component<DashProps> {
  render() {
    return (
      <div style={{ background: "#959298", height: "250px" }}>
        <div style={{ float: "left", padding: "10px", margin: "40px" }}>
          <StopButton />
        </div>
        <div style={{ float: "left", marginTop: "30px", margin: "30px" }}>
          <ReactSpeedometer
            maxValue={500}
            value={473}
            needleColor="yellow"
            startColor="green"
            maxSegmentLabels={5}
            segments={10}
            endColor="blue"
          />
        </div>
        <div style = {{float:"left", background: "#F3F5AD", padding: "15px", margin: "40px"}}>
        </div>
        <div style={{ float: "right", padding: "1px", margin: "30px" }}>
          <CoordinatesComponent X={163.45} Y={-88.39} Z={5.55}/>
          <ConnectionQualityComponent quality={100} />
          <Temperature value = {this.props.sensors.temperature}/>
        </div>
      </div>
    );
  }
}



export default DashComponent;
