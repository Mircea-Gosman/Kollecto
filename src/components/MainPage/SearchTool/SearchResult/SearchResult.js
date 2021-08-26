import React, {useState} from 'react';

import { ReactComponent as Button } from '../../../../assets/collectibleActionButton.svg';
import { ReactComponent as Youtube } from '../../../../assets/youtubeLogo.svg';
import { ReactComponent as Instagram } from '../../../../assets/instagramLogo.svg';

import './SearchResult.css';
import { useHistory } from "react-router-dom";
import constants from '../../../../utils/constants';

function SearchResult() {
    const history = useHistory();
    const [isYoutube, setYoutube] = useState(false)

    return (
        <>
            <div className={"searchResult-container"}>
                <div className={"searchResult-nft-container"}>
                    <div className={"searchResult-nft-image"}></div>
                    <div className={"searchResult-nft-description"}>
                        <p className={"searchResult-nft-title"}>Tacos Shopping in MIAMI</p>
                        <p className={"searchResult-nft-date"}>July 17 2021</p>
                        <span className={"searchResult-nft-button-container"} onClick={() => history.push(constants.url.TRANSACTION)}>
                            <Button className={"searchResult-nft-button"}/>
                            <p className={"searchResult-nft-button-text"}>Buy</p>
                        </span>
                    </div>
                </div>
                {isYoutube && <Youtube className={"search-youtubeLogo"}/>}
                {!isYoutube && <Instagram className={"search-instagramLogo"}/>}
            </div>
        </>
    );
}

export default SearchResult;