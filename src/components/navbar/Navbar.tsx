import React from "react";
import Badge from '@material-ui/core/Badge';
import "./Navbar.scss";

export default function Navbar(){
    return(
        <div className="navbar-wrapper">
            <div className="navbar-block">
                 <span>Home</span>
                <span>domains</span>
                <Badge badgeContent="new" color="primary">
                <span>websites</span>
                </Badge>
                <span>hosting</span>
                <span>cloud</span>
                <span>email</span>
                <span>security</span>
                <span>combo offers</span> 
            </div>
        </div>
    );
}