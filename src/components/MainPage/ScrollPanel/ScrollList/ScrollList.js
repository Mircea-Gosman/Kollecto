import React from 'react';

import './ScrollList.css';
import CollectibleContainer from "../CollectibleContainer";
import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../../reducers/tradingEnvironmentSlice";

function ScrollList(column) {
    const tradingEnvironment = useSelector(selectEnvironment);

    return (
        <>
           <div className={`scrollList ${tradingEnvironment}`}>
               <CollectibleContainer column={column.column}/>
               <CollectibleContainer column={column.column}/>
               <CollectibleContainer column={column.column}/>
           </div>
        </>
    );
}

export default ScrollList;