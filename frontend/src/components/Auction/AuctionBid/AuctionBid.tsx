import React, { useState, useEffect, useContext } from 'react';
import { AuctionItemContext } from '../../../contexts/contexts.ts';
import makeBid from '../../../api_fetches/makeBid.ts';

function AuctionTimer() {

    const [bidAttempt, setBidAttempt] = useState(false);
    const [bidAmount, setBidAmount] = useState(0.00);

    const auctionItem = useContext(AuctionItemContext);

    useEffect(() => {
        if(bidAttempt) {
            makeBid({id: auctionItem.id, updatedBidder: "Chuck Pagano", updatedBid: bidAmount}).then(success => {
                if (success) {
                    console.log("Bid was successful!")
                } else {
                    console.log("Bid could not be placed.")
                }
                setBidAttempt(false);
            })
        }
    }, [bidAttempt])

    return (
        <div>
            <p id="currentBidder">Current Bidder: {auctionItem.currentBidder}</p>
            <p id="currentBid">Current Bid: {auctionItem.currentBid}</p>
            <input type="number" min="0.00" step="0.01" id="bidAmount" onChange={e => setBidAmount(e.target.value)}/>
            <button id="bidButton" onClick={() => setBidAttempt(true)}>Make Bid</button>
        </div>
    );
}

export default AuctionTimer;