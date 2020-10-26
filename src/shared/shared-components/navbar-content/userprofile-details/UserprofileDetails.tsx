import React from "react";
import ProfileUser from "../../../../Assets/profile-user.svg";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Order from "../../../../Assets/order.svg";
import Badge from "@material-ui/core/Badge";
import "./UserprofileDetails.scss";

const useStyles = makeStyles((theme: any) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UserprofileDetails() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("English");
  const [currency, setCurrency] = React.useState("USD");
  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  const handleCurrency = (event: any) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="userprofile-container">
      <div className="user-block">
        <img src={ProfileUser} width="20px" height="20px" />
        <span className="add-padding">Login/Sign up</span>
      </div>
      <div className="user-block">
        <span>Language:</span>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            onChange={handleChange}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="French">French</MenuItem>
            <MenuItem value="Latice">Latice</MenuItem>
            <MenuItem value="Dutch">Dutch</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="user-block">
        <span>Currency: </span>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            onChange={handleCurrency}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="user-block">
        <Badge badgeContent={1} color="primary">
          <img src={Order} width="20px" height="20px" />
        </Badge>
      </div>
    </div>
  );
}
