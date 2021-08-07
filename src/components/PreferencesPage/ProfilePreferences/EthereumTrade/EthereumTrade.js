import React, {useState} from 'react';


import { ReactComponent as SwitchArrow } from '../../../../assets/backArrow.svg';
import { ReactComponent as Koyn } from '../../../../assets/koynLogo.svg';
import { ReactComponent as Ethereum } from '../../../../assets/ethereum.svg';

import "./EthereumTrade.css";

function EthereumTrade() {
    const [tradeDirection, setTradeDirection] = useState("fromKoyn");

    function changeTradeDirection() {
        if(tradeDirection === "fromEth") {
            setTradeDirection("");
        } else {
            setTradeDirection("fromEth");
        }
    }

    return (
        <>
            <div className={"ethereumTrade-container"}>
                <div className={"ethereumTrade-description"}>
                    <Koyn className={" ethereumTrade-description-koynLogo"}/>
                    <input className={`ethereumTrade-description-value koynSideValue`} placeholder={"0.00"}/>
                    <SwitchArrow className={`ethereumTrade-description-arrow ${tradeDirection}`} onClick={() => {changeTradeDirection()}}/>
                    <input className={"ethereumTrade-description-value"} placeholder={"0.00"}/>
                    <Ethereum className={"ethereumTrade-description-ethereumLogo"}/>
                </div>
                <button className={"ethereumTrade-button"}>Trade</button>
            </div>
        </>
    );
}

export default EthereumTrade;