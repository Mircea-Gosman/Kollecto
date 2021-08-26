import React from 'react';

import './LoginPage.css';
import { ReactComponent as LeftKoyns } from '../../assets/left_login_koyns.svg';
import { ReactComponent as RightKoyns } from '../../assets/right_login_koyns.svg';

import LoginForm from './LoginForm';
import KollectorLogo from './KollectorLogo';

function LoginPage() {
    return (
        <>
            <LeftKoyns className={"koyns leftKoyns"}/>
            <RightKoyns className={"koyns rightKoyns"}/>
            <KollectorLogo/>
            <LoginForm/>
        </>
    );
}

export default LoginPage;