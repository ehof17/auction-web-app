import React from 'react';
import AuctionInfo from './AuctionInfo.tsx';
import AuctionTimer from './AuctionTimer.tsx';
import AuctionBid from './AuctionBid.tsx';
import IAuctionItem from './models/IAuctionItem.ts';

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