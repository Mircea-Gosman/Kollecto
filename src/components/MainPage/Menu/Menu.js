import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as Market } from '../../../assets/market.svg';
import { ReactComponent as Inventory } from '../../../assets/inventory.svg';
import { setTradingEnvironment, selectEnvironment } from '../../../reducers/tradingEnvironmentSlice';

import './Menu.css';
import {useHistory} from "react-router-dom";
import constants from "../../../utils/constants";

function Menu() {
    const dispatch = useDispatch();
    const tradingEnvironment = useSelector(selectEnvironment);
    const isMarket = tradingEnvironment === "market";

    const history = useHistory();

    return (
        <>
            { history.location.pathname === constants.url.MAIN  &&

            <div className={"passiveMenuContainer"} onClick={ () => dispatch(setTradingEnvironment())}>
                {isMarket && <Inventory className={"inventorySVG"}/>}
                {!isMarket && <Market className={"inventorySVG"}/>}
            </div>
            }
            <div className={`activeMenuContainer ${tradingEnvironment}`}>
                {isMarket && <Market className={"marketSVG"}/>}
                {!isMarket && <Inventory className={"marketSVG"}/>}
            </div>
        </>
    );
}

export default Menu;