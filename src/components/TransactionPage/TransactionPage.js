import React from 'react';

import './TransactionPage.css';
import { ReactComponent as LeftKoyns } from '../../assets/left_login_koyns.svg';

import Menu from '../MainPage/Menu';
import TransactionStatement from './TransactionStatement/TransactionStatement';
import TransactionBanner from './TransactionBanner/TransactionBanner';
import TransactionBill from './TransactionBill/TransactionBill';

function TransactionPage() {
    return (
        <>
            <TransactionBanner/>
            <TransactionStatement/>
            <Menu/>
            <p className={"transactionAction"}>Buying</p>
            <TransactionBill/>
        </>
    );
}

export default TransactionPage;