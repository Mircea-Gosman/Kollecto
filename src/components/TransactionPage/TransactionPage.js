import React, {useState} from 'react';

import './TransactionPage.css';

import Menu from '../MainPage/Menu';
import TransactionStatement from './TransactionStatement/TransactionStatement';
import TransactionBanner from './TransactionBanner/TransactionBanner';
import TransactionBill from './TransactionBill/TransactionBill';

function TransactionPage() {
    const [transactionType, setTransactionType] = useState("Creating");

    return (
        <>
            <TransactionBanner/>
            <TransactionStatement/>
            <Menu/>
            <p className={`transactionAction ${transactionType}`}>{transactionType}</p>
            <TransactionBill transactionType={transactionType}/>
        </>
    );
}

export default TransactionPage;