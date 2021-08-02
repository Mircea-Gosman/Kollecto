import React from 'react';

import ProfileLogo from "../../Reusable/ProfileLogo";
import { ReactComponent as Wallet } from '../../../assets/wallet.svg';
import { ReactComponent as Platform } from '../../../assets/platform.svg';
import { ReactComponent as Koyn } from '../../../assets/koynLogo.svg';


import './Banner.css';
import {useHistory} from "react-router-dom";
import constants from "../../../utils/constants";
import { useSelector } from "react-redux";
import { selectEnvironment } from "../../../reducers/tradingEnvironmentSlice";

function Banner() {
    const history = useHistory();
    const tradingEnvironment = useSelector(selectEnvironment);
    const walletBalance = 2.9;

    const redirectPreferences = () => {
        history.push(constants.url.PREFERENCES);
    };

    return (
        <>
            <div className={`bannerContainer ${tradingEnvironment}`}>
                <ProfileLogo Logo={Koyn} variant={"large"} onClick={redirectPreferences}/>
                <div className={"balanceContainer"}>
                    <p className={"balance-value"}>{walletBalance}</p>
                </div>
                <ProfileLogo Logo={Wallet} variant={"small wallet"}/>
                <ProfileLogo Logo={Platform} variant={"small platform"}/>
            </div>

        </>
    );
}

export default Banner;