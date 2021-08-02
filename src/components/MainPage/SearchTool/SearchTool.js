import React, {useEffect, useRef} from 'react';

import { ReactComponent as Search } from '../../../assets/search.svg';
import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../reducers/tradingEnvironmentSlice";
import SearchResult from "./SearchResult";

import './SearchTool.css';

function SearchTool(props) {
    const tradingEnvironment = useSelector(selectEnvironment);
    const searchResults = useRef();

    const closeSearchResults = e => {
        if (searchResults.current && !searchResults.current.contains(e.target)) {
            // outside click
            props.openSearch(false);
        }
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", closeSearchResults);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", closeSearchResults);
        };
    }, []);

    return (
        <>
            <div className={"searchBarContainer"}>
                <input className={`searchInput ${tradingEnvironment}`} type="text" name="name" placeholder={"Search ..."} />
                <button className={`searchButton ${tradingEnvironment}`} type="submit" value="Submit" onClick={()=> {props.openSearch(true)}}>
                    <Search className={`searchIcon`}/>
                </button>
                {props.isSearchOpen &&
                    <div ref={searchResults} className={"searchResults-container"}>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                        <SearchResult/>
                    </div>
                }
            </div>
        </>
    );
}

export default SearchTool;