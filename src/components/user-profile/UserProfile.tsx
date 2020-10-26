import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Theme, createStyles } from "@material-ui/core/styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";

import ProfileUser from "../../Assets/profile-user.svg";
import Order from "../../Assets/order.svg";
import ModalPopup from "../../shared/ui-components/modal-popup/ModalPopup";
import NavbarContent from "../../shared/shared-components/navbar-content/NavbarContent";
import UserprofileDetails from "../../shared/shared-components/navbar-content/userprofile-details/UserprofileDetails";

import "./UserProfile.scss";

const useStyles = makeStyles((theme: any) => ({
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
  const [language, setLanguage] = React.useState("English");
  const [currency, setCurrency] = React.useState("USD");
  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  const handleCurrency = (event: any) => {
    setCurrency(event.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [nav, setNav] = useState(false);
  const togglePopup = (value: any) => {
    if (value === "user") {
      setUser(!user);
      setIsOpen(!isOpen);
    } else if (value === "nav") {
      setNav(!nav);
      setIsOpen(!isOpen);
    }
  };

  let popupContent: any;
  popupContent =
    isOpen && user ? (
      <ModalPopup
        type="user"
        render={() => <UserprofileDetails />}
        handleClose={() => {
          togglePopup("user");
        }}
      />
    ) : isOpen && nav ? (
      <ModalPopup
        type="nav"
        render={() => <NavbarContent />}
        handleClose={() => {
          togglePopup("nav");
        }}
      />
    ) : null;
  return (
    <>
      <div className="userprofile-wrapper">
        <div className="userprofile-block">
          <div className="mobile-icons">
            <div>
              <DehazeIcon
                onClick={() => {
                  togglePopup("nav");
                }}
              />
            </div>
            <div className="addon-flex-alignment">
              <PersonIcon
                onClick={() => {
                  togglePopup("user");
                }}
              />
            </div>
          </div>
          <div className="user-block addon-border">
            <img src={ProfileUser} width="20px" height="20px" />
            <span className="add-padding">Login/Sign up</span>
          </div>
          <div className="user-block addon-border">
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
          <div className="user-block addon-border">
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
      {popupContent}
    </>
  );
}
