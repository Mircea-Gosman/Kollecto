import React from 'react';

import './TransactionBill.css'
import { ReactComponent as CloseButton } from '../../../assets/close.svg';
import {useHistory} from "react-router-dom";

function TransactionBill() {
    const history = useHistory();

    return (
        <>
            <div className={"transactionBill-container"}>
                <div className={"transactionBill-closeButton"} onClick={ () => {history.goBack()}}>
                    <CloseButton className={"transactionBill-closeButton-svg"}/>
                </div>
            </div>
        </>
    );
}

export default TransactionBill;