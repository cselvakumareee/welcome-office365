import React from "react";
import Accordion from "../shared/ui-components/Accordion/Accordion";
import "./Faq.scss";

export default function Faq(){
    return(
        <div className="Faq-wrapper">
            <div className="Faq-block">
                <h3>FAQ</h3>
                <Accordion />
            </div>

        </div>
    );
}