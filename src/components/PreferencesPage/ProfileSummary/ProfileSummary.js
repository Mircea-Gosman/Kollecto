import React from 'react';

import {useHistory} from "react-router-dom";
import constants from "../../../utils/constants";
import { ReactComponent as Koyn } from '../../../assets/koynLogo.svg';
import { ReactComponent as BackButton } from '../../../assets/backArrow.svg';
import ProfileLogo from "../../Reusable/ProfileLogo";

import "./ProfileSummary.css";

function ProfileSummary() {
    const history = useHistory();
    return (
        <>
            <div className={"profileSummary-container"}>
                <BackButton className={"profileSummary-backButton"} onClick={() => history.goBack()}/>
                <ProfileLogo Logo={Koyn} variant={"medium"}/>
                <p className={"profileSummary-balance"}>2.9</p>
                {/*<button className={"profileSummary-logoutButton"} onClick={() => history.push(constants.url.LOGIN)}>Logout</button>*/}
            </div>
        </>
    );
}

export default ProfileSummary;