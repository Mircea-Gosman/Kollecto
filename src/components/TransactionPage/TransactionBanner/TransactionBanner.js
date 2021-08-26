import React from 'react';

import './TransactionBanner.css'
import { ReactComponent as Koyn } from '../../../assets/koynLogo.svg';
import ProfileLogo from "../../Reusable/ProfileLogo";
import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../reducers/tradingEnvironmentSlice";


function TransactionBanner() {
    const tradingEnvironment = useSelector(selectEnvironment);

    return (
        <>
            <div className={`transactionBanner-container ${tradingEnvironment}`}>
                <p className={"transactionBanner-balance"}>2.9</p>
                <ProfileLogo Logo={Koyn} variant={"small transaction"}/>
            </div>
        </>
    );
}

export default TransactionBanner;