import React, {useState} from 'react';

import Banner from './Banner';
import Menu from './Menu';
import SearchTool from './SearchTool';
import ScrollPanel from './ScrollPanel';
import UserMenu from "./UserMenu/UserMenu";

function MainPage() {
    const [isSearchOpen, openSearch] = useState(false);

    return (
        <>
            <Banner/>
            <UserMenu/>
            <SearchTool isSearchOpen={isSearchOpen} openSearch={openSearch}/>
            <Menu/>
            { !isSearchOpen && <ScrollPanel/> }
        </>
    );
}

export default MainPage;