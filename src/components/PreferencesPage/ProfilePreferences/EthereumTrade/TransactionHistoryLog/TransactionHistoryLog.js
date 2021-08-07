import React from 'react';

// import constants from "../../../utils/constants";
import { ReactComponent as InstagramLogo } from '../../../../../assets/instagramLogo.svg';
import { ReactComponent as YoutubeLogo } from '../../../../../assets/youtubeLogo.svg';
import { ReactComponent as Koyn } from '../../../../../assets/koynLogo.svg';

import "./TransactionHistoryLog.css";

function TransactionHistoryLog() {
    return (
        <>
            <div className={"transactionHistoryLog-container"}>
                <div className={"transactionHistoryLog-date"}>June 29 2021</div>
                <div className={"transactionHistoryLog-image"}/>
                <div className={"transactionHistoryLog-description"}>
                    <p className={"transactionHistoryLog-description-title"}>2 am Tacos Fiesta gone wrong</p>
                    <div className={"transactionHistoryLog-description-descriptors"}>
                        <p className={"transactionHistoryLog-description-descriptor-date"}>July 17 2021</p>
                        <InstagramLogo className={"transactionHistoryLog-description-descriptor-svg"}/>
                    </div>
                </div>
                <div className={"transactionHistoryLog-pricing-container"}>
                    <p className={"transactionHistoryLog-pricing-cost"}>0.9</p>
                    <Koyn className={"transactionHistoryLog-pricing-svg"}/>
                </div>
            </div>
        </>
    );
}

export default TransactionHistoryLog;