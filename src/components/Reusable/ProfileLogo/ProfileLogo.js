import React from 'react';

import { ReactComponent as Background } from '../../../assets/profileBackground.svg';

import './ProfileLogo.css';

function ProfileLogo({Logo, variant, onClick}) {
    return (
        <>
            <div className={`profileContainer ${variant}`}>
                <Background className={`profileBackground ${variant}`}/>
                <Logo className={`profileButton ${variant}`} onClick={onClick}/>
            </div>
        </>
    );
}

export default ProfileLogo;