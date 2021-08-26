import React from 'react';

import ProfileLogo from "../../Reusable/ProfileLogo";
import { ReactComponent as Wallet } from '../../../assets/wallet.svg';
import { ReactComponent as Platform } from '../../../assets/platform.svg';
import { ReactComponent as Instagram } from '../../../assets/instagramLogo.svg';
import { ReactComponent as Youtube } from '../../../assets/youtubeLogo.svg';


import './UserMenu.css';
import {useDispatch, useSelector} from "react-redux";
import { selectEnvironment } from "../../../reducers/tradingEnvironmentSlice";
import { setSocialPlatform, selectSocialPlatform } from "../../../reducers/socialPlatform";
import doAll from "../../../External/Youtube";

function UserMenu() {
    const dispatch = useDispatch();
    const tradingEnvironment = useSelector(selectEnvironment);
    const socialPlatform = useSelector(selectSocialPlatform);

    const showUserMenu = socialPlatform.generic !== "standby";

    return (
        <>
            {showUserMenu && <div className={`userMenu-container ${tradingEnvironment}`}>
                <Instagram className={`userMenu-instagram ${socialPlatform.specific}`} onClick={()=> dispatch(setSocialPlatform({generic: socialPlatform.generic, specific: "instagram"}))}/>
                <Youtube className={`userMenu-youtube ${socialPlatform.specific}`} onClick={()=> {dispatch(setSocialPlatform({generic: socialPlatform.generic, specific: "youtube"})); doAll()}}/>
            </div>}
            {showUserMenu && socialPlatform.specific === "youtube" && <div className={"userMenuAsset-container"}>
                <div className={"userMenuAsset-title-container"}>
                    <Youtube className={"userMenuAsset-container-YoutubeSVG"}/>
                    <p className={"userMenuAsset-title"}>Choose Channel</p>
                </div>
                <div className={"youtubeChannel-container"}>
                    <p className={"youtubeChannel-selector"}>Tacos</p>
                    <p className={"youtubeChannel-selector"}>Quesadillas</p>
                    <p className={"youtubeChannel-selector"}>Tortillas</p>
                    <p className={"youtubeChannel-selector"}>Potatoes</p>
                </div>
            </div>}
        </>
    );
}

export default UserMenu;