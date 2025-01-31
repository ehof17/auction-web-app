import React, { useContext } from 'react';
import { AuctionItemContext } from '../../../contexts/contexts.ts';

interface AuctionInfoData {
    seller: string, 
    description: string
}

function AuctionInfo() {

    const auctionItem = useContext(AuctionItemContext);

    return (
        <div>
            <p id="seller">Seller: {auctionItem.seller}</p>
            <p id="description">Description: {auctionItem.description}</p>
        </div>
    );
}

export default AuctionInfo;