import React from "react";
import Calender from "../../Assets/teams.png";
import MaterialTabs from "../../shared/ui-components/material-tabs/MaterialTabs";
import "./SimpleTabs.scss";

var sectionStyle = {
  width: "90%",
  backgroundImage: "url(" + Calender + ")",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export default function SimpleTabs() {
  return (
    <div className="simpletabs-wrapper">
      <div className="simpletabs-block">
        <header>
          <h2 className="tab-heading">What can you do with office 365?</h2>
        </header>
        <div className="tab-wrapper">
          <MaterialTabs />
        </div>

        <div className="text-container">
          <div className="inner-text-container add-text-alignment">
            <div className="text-block">
              <h3>Professional Email</h3>
              <span>
                Get a Professional email for your domain with the power of
                Outlook. With sufficient storage, you never run out of space
                again.
              </span>
            </div>
            <div className="text-block">
              <h3>Stay Connected</h3>
              <span>
                Connect with your teams with HD video calls on Skype and
                Microsoft teams.
              </span>
            </div>
            <div className="text-block">
              <h3>Stay Organised</h3>
              <span>
                Add reminders, schedule meetings and never miss a thing with
                smart calender.
              </span>
            </div>
          </div>
          <div className="inner-text-container add-img">
            <div className="addon-reduce-height" style={sectionStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
