import React from 'react';

import { ReactComponent as Button } from '../../../../assets/collectibleActionButton.svg';
import './CollectibleContainer.css';
import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../../reducers/tradingEnvironmentSlice";
import {useHistory} from "react-router-dom";
import constants from "../../../../utils/constants";

function CollectibleContainer(column) {
    const tradingEnvironment = useSelector(selectEnvironment);
    const history = useHistory();
    const url = constants.url;

    function establishText() {
        if (tradingEnvironment === "market") {
            return "Buy";
        }

        switch (column.column) {
            case "left":
                return "Forge";
            case "middle":
                return "Sell";
            case "right":
                return "Sold";
        }
    }

    return (
        <>
            <div className={"collectibleContainer-container"}>
                <div className={`collectibleContainer-shaper ${tradingEnvironment} ${column.column}`}>
                    <div className={"collectibleContainer-image"}></div>
                    <span className={"collectibleContainer-button"} onClick={() => {history.push(url.TRANSACTION)}}>
                        <Button className={`collectibleContainer-button-svg ${tradingEnvironment} ${column.column}`}/>
                        <p className={"collectibleContainer-button-text"}>{establishText()}</p>
                    </span>
                </div>
            </div>
        </>
    );
}

export default CollectibleContainer;