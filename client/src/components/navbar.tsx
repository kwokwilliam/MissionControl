import React from "react";
import "./navbar.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import CameraIcon from "@material-ui/icons/Camera";
import EcoIcon from "@material-ui/icons/Eco";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

const styles = {
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
};

class Navbar extends React.Component {
  state = {
    value: 0,
    pathMap: [
      "/main-component",
      "arm-component",
      "science-component",
      "telemetry-component",
      "camera-component"
    ]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, pathMap } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={"navbar"}
      >
        <BottomNavigationAction
          label="Main"
          icon={<HomeIcon />}
          component={Link}
          to={pathMap[0]}
        />
        <BottomNavigationAction
          label="Arm"
          icon={<PhoneIcon />}
          component={Link}
          to={pathMap[1]}
        />
        <BottomNavigationAction
          label="Science"
          icon={<EcoIcon />}
          component={Link}
          to={pathMap[2]}
        />
        <BottomNavigationAction
          label="Telemetry"
          icon={<OfflineBoltIcon />}
          component={Link}
          to={pathMap[3]}
        />
        <BottomNavigationAction
          label="Camera"
          icon={<CameraIcon />}
          component={Link}
          to={pathMap[4]}
        />
      </BottomNavigation>
    );
  }
}
export default Navbar;
