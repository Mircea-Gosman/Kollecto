import React, {useState} from 'react';

import './TransactionBill.css'
import { ReactComponent as CloseButton } from '../../../assets/close.svg';
import { ReactComponent as BillVoidSeparator } from '../../../assets/billVoidSeparator.svg';
import { ReactComponent as YoutubeLogo } from '../../../assets/youtubeLogo.svg';
import { ReactComponent as InstagramLogo } from '../../../assets/instagramLogo.svg';
import { ReactComponent as Koyn } from '../../../assets/koynLogo.svg';
import {useHistory} from "react-router-dom";

function TransactionBill(transactionType) {
    const history = useHistory();
    let transactionCategory = transactionType.transactionType;
    const [isYoutube, setYoutube] = useState(false)

    let totalPrice = 0.5;
    let royaltiesValue = 0.1;
    let description =  "Fairly bold description of a bunch of guys eating tacos in Los Angeles, California.";

    if (transactionCategory === "Creating") {
        totalPrice = "5";
        royaltiesValue = "0.5";
        description = "Short asset description ..."
    }

    return (
        <>
            <div className={`transactionBill-container ${transactionCategory}`}>
                <div className={"transactionBill-closeButton"} onClick={ () => {history.goBack()}}>
                    <CloseButton className={"transactionBill-closeButton-svg"}/>
                </div>
                <div className={`transactionBill-image ${transactionCategory}`}>
                    <div className={"transactionBill-image-clout"}>
                        <p className={"transactionBill-image-clout-text"}>
                            <span className={"transactionBill-image-clout-number"}>22M</span>
                            <span className={"transactionBill-image-clout-id"}>     Views         </span>
                            <span className={"transactionBill-image-clout-number"}>130K</span>
                            <span className={"transactionBill-image-clout-id"}>     Likes         </span>
                            <span className={"transactionBill-image-clout-number"}>10K</span>
                            <span className={"transactionBill-image-clout-id"}>     Comments</span>
                        </p>
                    </div>
                </div>
                <p className={"transactionBill-image-title"}>Tacos With the Boys</p>
                {isYoutube && <YoutubeLogo className={"transactionBill-socialPlatform youtubeLogo"}/>}
                {!isYoutube && <InstagramLogo className={"transactionBill-socialPlatform instagramLogo"}/>}
                <BillVoidSeparator className={`transactionBill-voidSeparator ${transactionCategory}`}/>
                <button className={`transactionBill-confirmButton ${transactionCategory}`}>Confirm</button>
                <p className={"transactionBill-publication"}>Published:<span className={"transactionBill-publication-date"}>June 27 2021</span></p>
                <p className={"transactionBill-description-title"}>Description:</p>
                <textarea className={`transactionBill-description ${transactionCategory}`} rows="3" type="text" placeholder={description}></textarea>
                <p className={`transactionBill-total-title ${transactionCategory}`}>Total Price</p>
                <textarea className={`transactionBill-total-value ${transactionCategory}`} rows="1" type="text" placeholder={totalPrice}></textarea>
                <Koyn className={`transactionBill-price-koyn ${transactionCategory}`}/>
                <p className={`transactionBill-royalties-title ${transactionCategory}`}>Royalties</p>
                <textarea className={`transactionBill-royalties-value ${transactionCategory}`} rows="1" type="text" placeholder={royaltiesValue}></textarea>
                <Koyn className={`transactionBill-royalties-koyn ${transactionCategory}`}/>
                <p className={`transactionBill-royalties-detail ${transactionCategory}`}>Of Above Price</p>
            </div>
        </>
    );
}

export default TransactionBill;