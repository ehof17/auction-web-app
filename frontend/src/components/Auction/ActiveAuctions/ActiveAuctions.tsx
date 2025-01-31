import React, { useState, useEffect } from 'react';
import fetchAuctionItems from '../../../api_fetches/getAuctionItems.ts';
import IAuctionItem from '../../../models/IAuctionItem.ts';
import  AuctionItem  from '../AuctionItem/AuctionItem.tsx';
import { AuctionItemContext } from '../../../contexts/contexts.ts';

function ActiveAuctions() {
    const [auctionItems, setAuctionItems] = useState<IAuctionItem[]>([]);

    useEffect(() => {
        fetchAuctionItems().then(auctionItems => setAuctionItems(auctionItems)).catch(error => console.log(error))
    },[])

    return (
        <div className="active-auctions">
            <ul>
                {
                    auctionItems.map(auctionItem => (
                        <li key={auctionItem.id}>
                            {               
                                <AuctionItemContext.Provider value={auctionItem}>
                                    <AuctionItem/>
                                </AuctionItemContext.Provider>               
                            }
                        </li>
                    ))
                }
            </ul> 
        </div>
    );
}

export default ActiveAuctions;