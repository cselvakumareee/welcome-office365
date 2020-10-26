import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import WelcomeBannerImg from "../Assets/welcome-banner.jpg";
import Office365 from "../Assets/office365.svg";
import "./WelcomeBanner.scss";

var sectionStyle = {
  width: "100%",
  height: "450px",
  backgroundImage: "url(" + WelcomeBannerImg + ")",
};

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function WelcomeBanner() {
  const classes = useStyles();
  return (
    <div className="welcomebanner-wrapper" style={sectionStyle}>
      <div className="welcomebanner-block">
        <div className="headline">
          <img src={Office365} width="25px" height="25px" />
          <span className="heading1">office 365</span>
        </div>
        <div>
          <h3>Email, Word, Excel, Cloud storage and much more!</h3>
        </div>
        <div>
          <span>
            Never miss an important email and stay connected with your Office
            wherever you are
          </span>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              View Plans
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
