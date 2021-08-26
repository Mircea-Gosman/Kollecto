import React from 'react';

import ProfileSummary from "./ProfileSummary";
import ProfilePreferences from "./ProfilePreferences";

import "./PreferencesPage.css"

function PreferencesPage() {
    return (
        <>
            <div className={"preferences-container"}>
                <ProfileSummary/>
                <ProfilePreferences/>
            </div>
        </>
    );
}

export default PreferencesPage;