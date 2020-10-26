import React from "react";
import "./ModalPopup.scss";

const ModalPopup = (props:any) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.render()}
      </div>
    </div>
  );
};

export default ModalPopup;
