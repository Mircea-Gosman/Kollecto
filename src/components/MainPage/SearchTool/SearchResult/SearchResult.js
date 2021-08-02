import React, {useState} from 'react';

import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../../reducers/tradingEnvironmentSlice";
import { ReactComponent as Button } from '../../../../assets/collectibleActionButton.svg';
import { ReactComponent as Youtube } from '../../../../assets/youtubeLogo.svg';
import './SearchResult.css';

function SearchResult() {
    const tradingEnvironment = useSelector(selectEnvironment);

    return (
        <>
            <div className={"searchResult-container"}>
                <div className={"searchResult-nft-container"}>
                    <div className={"searchResult-nft-image"}></div>
                    <div className={"searchResult-nft-description"}>
                        <p className={"searchResult-nft-title"}>Tacos Shopping in MIAMI</p>
                        <p className={"searchResult-nft-date"}>July 17 2021</p>
                        <span className={"searchResult-nft-button-container"}>
                            <Button className={"searchResult-nft-button"}/>
                            <p className={"searchResult-nft-button-text"}>Buy</p>
                        </span>
                    </div>
                </div>
                <Youtube className={"search-platformLogo"}/>
            </div>
        </>
    );
}

export default SearchResult;