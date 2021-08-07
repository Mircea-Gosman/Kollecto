import React from 'react';

import TransactionHistoryLog from './TransactionHistoryLog';

import "./TransactionHistory.css";

function TransactionHistory() {
    return (
        <>
            <div className={"transactionHistory"}>
                <TransactionHistoryLog/>
                <TransactionHistoryLog/>
                <TransactionHistoryLog/>
                <TransactionHistoryLog/>
                <TransactionHistoryLog/>
            </div>
        </>
    );
}

export default TransactionHistory;