import AuctionItemData from "../models/IAuctionItem";
import { API_ENDPOINTS } from './constants.ts';

//want to add return type
async function addAuctionItem(auctionItem: AuctionItemData): Promise<boolean> {
    const url = API_ENDPOINTS.ADD_AUCTION_ITEM;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: auctionItem.id, 
                seller: auctionItem.seller, 
                description: auctionItem.description, 
                startingPrice: auctionItem.startingPrice,
                startDate: auctionItem.startDate,
                endDate: auctionItem.endDate,
                currentBidder: auctionItem.currentBidder,
                currentBid: auctionItem.currentBid
            })
        });
    
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        let addStatus: boolean = json;
        return addStatus;

    } catch(error) {
        console.log(error.message);
        return false;
    }
}

export default addAuctionItem;