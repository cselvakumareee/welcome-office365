import React from "react";
import MaterialSlider from "../../shared/ui-components/slider/Slider";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { blue, green, purple } from "@material-ui/core/colors";

import OutlookImg from "../../Assets/outlook.png";
import MicrosoftTeamsImg from "../../Assets/MicrosoftTeams.svg";
import SharepointImg from "../../Assets/SharePoint.svg";
import YammerImg from "../../Assets/Yammer.png";
import WordImg from "../../Assets/word.png";
import ExcelImg from "../../Assets/excel.png";
import PowerpointImg from "../../Assets/powerpoint.png";

import "./LicensePlans.scss";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

var buttonStyle = {
  color: "#ffffff",
  backgroundColor: "#007bff",
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    textTransform: "capitalize",
  },
}));

export default function LicensePlans() {
  const classes = useStyles();
  return (
    <div className="licenseplans-wrapper">
      <div className="licenseplans-block">
        <div className="slider-block">
          <h3>Get Started with Office 365</h3>
          <MaterialSlider />
        </div>
        <div className="plan-container">
          <div className="inner-plan-container">
            <div className="heading-block">
              <span>Email Essentials</span>
            </div>
            <div className="pricing-block">
              <span>$</span>
              <span className="first-child">1.99</span>
              <span className="second-child">/license/mo</span>
            </div>
            <div className="content-wrapper">
              <div className="content-block1 add-flex-align-margin-space">
                <span className="block1">Outlook Web Access</span>
                <span className="block2">15 GB Mailbox</span>
                <div>
                  <img src={OutlookImg} width="30px" height="30px" />
                </div>
              </div>

              <ThemeProvider theme={theme}>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  className={classes.margin}
                >
                  Select Plan
                </Button>
              </ThemeProvider>
            </div>
          </div>
          {/*----------------------------------- */}
          <div className="inner-plan-container">
            <div className="heading-block">
              <span>Business Essentials</span>
            </div>
            <div className="pricing-block">
              <span>$</span>
              <span className="first-child">5.99</span>
              <span className="second-child">/license/mo</span>
            </div>
            <div className="content-wrapper">
              <div className="content-block1">
                <span className="block1">Outlook Web Access</span>
                <span className="block2">50 GB Mailbox</span>
                <div>
                  <img src={OutlookImg} width="30px" height="30px" />
                </div>
              </div>

              <div className="content-block1">
                <span className="block1">cloud Storage</span>
                <span className="block2">1 TB</span>
              </div>
              <div className="content-block1">
                <span className="block1">Collaborative Tools</span>
                <div>
                  <span>
                    <img src={MicrosoftTeamsImg} width="30px" height="30px" />
                  </span>
                  <span>
                    <img src={SharepointImg} width="30px" height="30px" />
                  </span>
                  <span>
                    <img src={YammerImg} width="30px" height="30px" />
                  </span>
                </div>
              </div>
              <div className="content-block1 add-flex-align-margin-space">
                <span className="block1">Microsoft Online</span>
                <div>
                  <span className="add-padding-space">
                    <img src={WordImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={ExcelImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={PowerpointImg} width="20px" height="20px" />
                  </span>
                </div>
              </div>

              <ThemeProvider theme={theme}>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  className={classes.margin}
                >
                  Select Plan
                </Button>
              </ThemeProvider>
            </div>
          </div>
          {/*----------------------------------- */}
          <div className="inner-plan-container">
            <div className="heading-block">
              <span>Business Premium</span>
            </div>
            <div className="pricing-block">
              <span>$</span>
              <span className="first-child">9.99</span>
              <span className="second-child">/license/mo</span>
            </div>
            <div className="content-wrapper">
              <div className="content-block1">
                <span className="block1">Outlook Web Access</span>
                <span className="block2">50 GB Mailbox</span>
                <div>
                  <img src={OutlookImg} width="30px" height="30px" />
                </div>
              </div>

              <div className="content-block1">
                <span className="block1">cloud Storage</span>
                <span className="block2">1 TB</span>
              </div>
              <div className="content-block1">
                <span className="block1">Collaborative Tools</span>
                <div>
                  <span>
                    <img src={MicrosoftTeamsImg} width="30px" height="30px" />
                  </span>
                  <span>
                    <img src={SharepointImg} width="30px" height="30px" />
                  </span>
                  <span>
                    <img src={YammerImg} width="30px" height="30px" />
                  </span>
                </div>
              </div>
              <div className="content-block1">
                <span className="block1">Microsoft Online</span>
                <div>
                  <span className="add-padding-space">
                    <img src={WordImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={ExcelImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={PowerpointImg} width="20px" height="20px" />
                  </span>
                </div>
              </div>
              <div className="content-block1">
                <span className="block1">Microsoft Office Desktop</span>
                <div className="add-flex-alignment">
                  <span className="add-padding-space">
                    <img src={WordImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={ExcelImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={PowerpointImg} width="20px" height="20px" />
                  </span>
                  <span>
                    <img src={MicrosoftTeamsImg} width="30px" height="30px" />
                  </span>
                  <span>
                    <img src={SharepointImg} width="30px" height="30px" />
                  </span>
                  <span>
                    <img src={YammerImg} width="30px" height="30px" />
                  </span>
                </div>
              </div>

              <div className="content-block1">
                <span className="block1">Multiple Devices</span>
                <span className="block2">Upto 5 devices per user</span>
              </div>

              <div className="content-block1 add-flex-align-margin-space add-flex-alignment">
                <span className="block1">Business Apps</span>
                <div>
                  <span className="add-padding-space">
                    <img src={WordImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={ExcelImg} width="20px" height="20px" />
                  </span>
                  <span className="add-padding-space">
                    <img src={PowerpointImg} width="20px" height="20px" />
                  </span>
                  <span>
                    <img src={YammerImg} width="30px" height="30px" />
                  </span>
                </div>
              </div>

              <ThemeProvider theme={theme}>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  className={classes.margin}
                >
                  Select Plan
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
