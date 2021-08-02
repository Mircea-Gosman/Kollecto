import React from 'react';

import './ScrollPanel.css';
import ScrollList from "./ScrollList";
import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../reducers/tradingEnvironmentSlice";

function ScrollPanel() {
    const tradingEnvironment = useSelector(selectEnvironment);

    return (
        <>
           <div className={`scrollPanel ${tradingEnvironment}`}>
               <ScrollList column={"left"}/>
               <div className={"separator"}></div>
               <ScrollList column={"middle"}/>
               <div className={"separator separator_right"}></div>
               <ScrollList column={"right"}/>
           </div>
        </>
    );
}

export default ScrollPanel;