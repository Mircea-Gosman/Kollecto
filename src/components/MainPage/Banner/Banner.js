import React from 'react';

import ProfileLogo from "../../Reusable/ProfileLogo";
import { ReactComponent as Wallet } from '../../../assets/wallet.svg';
import { ReactComponent as Platform } from '../../../assets/platform.svg';
import { ReactComponent as Koyn } from '../../../assets/koynLogo.svg';


import './Banner.css';
import {useHistory} from "react-router-dom";
import constants from "../../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import { selectEnvironment } from "../../../reducers/tradingEnvironmentSlice";
import {selectSocialPlatform, setSocialPlatform} from "../../../reducers/socialPlatform";

function Banner() {
    const history = useHistory();
    const dispatch = useDispatch();
    const tradingEnvironment = useSelector(selectEnvironment);
    const socialPlatform = useSelector(selectSocialPlatform);
    const walletBalance = 2.9;

    const redirectPreferences = () => {
        history.push(constants.url.PREFERENCES);
    };

    const togglePlatform = () => {
        const newPlatform = !socialPlatform.generic ? {generic: "standby", specific: socialPlatform.specific} : {generic: "", specific: socialPlatform.specific};
        dispatch(setSocialPlatform(newPlatform));
    };

    return (
        <>
            <div className={`bannerContainer ${tradingEnvironment}`}>
                <ProfileLogo Logo={Koyn} variant={"large"} onClick={redirectPreferences}/>
                <div className={"balanceContainer"}>
                    <p className={"balance-value"}>{walletBalance}</p>
                </div>
                <ProfileLogo Logo={Wallet} variant={"small wallet"}/>
                <ProfileLogo Logo={Platform} variant={"small platform"} onClick={togglePlatform}/>
            </div>

        </>
    );
}

export default Banner;