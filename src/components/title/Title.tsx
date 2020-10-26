import React from "react";
import Cloud from "../../Assets/cloud.svg";
import "./Title.scss";

export default function Title(){
    return (
        <div className="title-wrapper">
            <div className="title-block">
                <img src={Cloud} width="30px" height="30px"/>
                <h2>Your brand</h2>
            </div>
        </div>
    );
}