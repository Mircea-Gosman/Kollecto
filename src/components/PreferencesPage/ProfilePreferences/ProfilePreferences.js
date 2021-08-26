import React, {useState} from 'react';

import TransactionHistory from "./TransactionHistory";
import EthereumTrade from "./EthereumTrade";
import { ReactComponent as KoynsBackground } from "../../../assets/left_login_koyns.svg";

import "./ProfilePreferences.css";

function ProfilePreferences() {
    const [isHistory, setHistory] = useState(false);

    const ethTrade = !isHistory ? "activeNavItem" : "";
    const tranHistory = isHistory ? "activeNavItem" : "";;

    return (
        <>
            <div className={"profilePreferences-container"}>
                {!isHistory && <KoynsBackground className={"ethereumTradeKoyns ethereumTradeKoyns-left"}/>}
                <div className={"profilePreferences-section"}>
                    <div className={"profilePreferences-section-nav"}>
                        <div className={`profilePreferences-section-nav-item-button ${ethTrade}`} onClick={() => setHistory(false)}>Trade Eth</div>
                        <div className={`profilePreferences-section-nav-item-button ${tranHistory}`} onClick={() => setHistory(true)}>Transaction History</div>
                    </div>
                    {isHistory && <TransactionHistory/>}
                    {!isHistory && <EthereumTrade/>}
                </div>
                {!isHistory && <KoynsBackground className={"ethereumTradeKoyns"}/>}
            </div>
        </>
    );
}

export default ProfilePreferences;