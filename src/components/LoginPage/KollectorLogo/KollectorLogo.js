import React from 'react';

import './KollectorLogo.css';
import { ReactComponent as LoginLogo } from '../../../assets/loginLogo.svg';

function KollectorLogo() {
    return (
        <>
            <div className={"logoContainer"}>
                <LoginLogo/>
                <div className={"slogan"}>Own Your Media.</div>
            </div>
        </>
    );
}

export default KollectorLogo;