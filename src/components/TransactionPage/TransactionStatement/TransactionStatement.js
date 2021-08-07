import React from 'react';

import './TransactionStatement.css'
import {useSelector} from "react-redux";
import {selectEnvironment} from "../../../reducers/tradingEnvironmentSlice";

function TransactionStatement() {
    const tradingEnvironment = useSelector(selectEnvironment);
    return (
        <>
            <div className={`transactionStatement-container ${tradingEnvironment}`}>
                <p className={"transactionStatement"}>Currently viewing Transaction</p>
            </div>
        </>
    );
}

export default TransactionStatement;