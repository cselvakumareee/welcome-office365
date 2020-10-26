import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Theme, createStyles } from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';
import "./UserProfile.scss";
import ProfileUser from "../Assets/profile-user.svg";
import Order from "../Assets/order.svg";
import { AnyAaaaRecord } from "dns";

const useStyles = makeStyles((theme:any) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function UserProfile() {
    const classes = useStyles();
    const [language, setLanguage] = React.useState('English');
    const [currency, setCurrency] = React.useState('USD');
    const handleChange = (event:any) => {
        setLanguage(event.target.value);
      };

      const handleCurrency = (event:any) => {
        setLanguage(event.target.value);
      };
    
  return (
    <div className="userprofile-wrapper">
      <div className="userprofile-block">
        <div className="mobile-icons">
            <div><DehazeIcon /></div>
            <div className="addon-flex-alignment"><PersonIcon /></div>
        </div>

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
    </div>
  );
}
