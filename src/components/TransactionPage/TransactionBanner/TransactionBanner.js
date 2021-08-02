import React from 'react';

import './TransactionBanner.css'
import { ReactComponent as Koyn } from '../../../assets/koynLogo.svg';
import ProfileLogo from "../../Reusable/ProfileLogo";


function TransactionBanner() {
    return (
        <>
            <div className={"transactionBanner-container"}>
                <p className={"transactionBanner-balance"}>2.9</p>
                <ProfileLogo Logo={Koyn} variant={"small transaction"}/>
            </div>
        </>
    );
}

export default TransactionBanner;