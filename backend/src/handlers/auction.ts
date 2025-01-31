import IAuctionItem from "../models/IAuctionItem.js";
import IBidInfo from "../models/IBidInfo.js";

//fake auction database
let auction_items: Array<IAuctionItem> = [
    {
        "id":1,
        "seller":"alexm1",
        "description":"pee pee poo poo",
        "startingPrice":25000,
        "startDate": new Date("2025-01-09T19:51:00"),
        "endDate": new Date("2026-01-30T19:51:00"),
        "currentBidder":"Chuck Pagano",
        "currentBid":30000.01
    }
]

//TODO: Consider id assignment system more thoroughly (especially if delete functionality is added)
export function AddAuctionItem(auctionItem: IAuctionItem): boolean {
    auctionItem.id = auction_items.length + 1;
    return auction_items.push(auctionItem) == auctionItem.id;
}

//TODO: Not sure if we want to have delete functionality
export function DeleteAuctionItem(auctionItem: IAuctionItem): boolean {
    return false;
}

//How should we handle not finding the auction item ??? 
export function GetAuctionItem(id: number): IAuctionItem | null {
    const auctionItem = auction_items.find(auctionItem => auctionItem.id == id);
    if (auctionItem == undefined) {
        return null;
    }
    return auctionItem;
}

export function GetAuctionItems(active: boolean = true): Array<IAuctionItem> {
    const currentTime = new Date();
    if (active) {
        return auction_items.filter(auctionItem => auctionItem.endDate > currentTime && auctionItem.startDate <= currentTime)
    }
    return auction_items;
}

export function MakeBid(bidInfo: IBidInfo): boolean {
    let pendingBidAuctionItem = auction_items.find(auctionItem => auctionItem.id == bidInfo.id);

    if (pendingBidAuctionItem == undefined || 
        pendingBidAuctionItem.currentBidder == bidInfo.updatedBidder ||
        pendingBidAuctionItem.currentBid >= bidInfo.updatedBid
    ) {
        return false;
    }
        
    pendingBidAuctionItem.currentBidder = bidInfo.updatedBidder;
    pendingBidAuctionItem.currentBid = bidInfo.updatedBid;
    console.log(auction_items);
    return true;
}