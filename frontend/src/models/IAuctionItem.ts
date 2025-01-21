export default interface IAuctionItem {
    id: number,
    seller: string,
    description: string, 
    startingPrice: number,
    startDate: Date,
    endDate: Date,
    currentBidder: string,
    currentBid: number
}