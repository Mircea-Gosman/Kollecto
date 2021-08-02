import React, {useState} from 'react';

import Banner from './Banner';
import Menu from './Menu';
import SearchTool from './SearchTool';
import ScrollPanel from './ScrollPanel';

function MainPage() {
    const [isSearchOpen, openSearch] = useState(false);

    return (
        <>
            <Banner/>
            <SearchTool isSearchOpen={isSearchOpen} openSearch={openSearch}/>
            <Menu/>
            { !isSearchOpen && <ScrollPanel/> }
        </>
    );
}

export default MainPage;