import React from 'react';
import AuctionInfo from '../AuctionInfo/AuctionInfo.tsx';
import AuctionTimer from '../AuctionTimer/AuctionTimer.tsx';
import AuctionBid from '../AuctionBid/AuctionBid.tsx';

function AuctionItem() {

    return (
        <div className="auction-item">
            <AuctionInfo/>
            <AuctionTimer/>
            <AuctionBid/>
        </div>
    );
} 

export default AuctionItem;