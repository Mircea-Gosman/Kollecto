import React, {useState} from 'react';

import { ReactComponent as Background } from '../../../assets/profileBackground.svg';

import './ProfileLogo.css';

function ProfileLogo({Logo, variant, onClick}) {
    const [isOpen, open] = useState("close");

    const click = () => {
        if(isOpen === "open") {
            open("close");
        } else {
            open("open");
        }

        if(onClick)
            onClick();
    }

    return (
        <>
            <div className={`profileContainer ${variant}`}>
                <Background className={`profileBackground ${variant}`}/>
                <Logo className={`profileButton ${variant} ${isOpen}`} onClick={click}/>
            </div>
        </>
    );
}

export default ProfileLogo;