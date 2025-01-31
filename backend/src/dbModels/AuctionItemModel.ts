
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const auctionItemSchema = new Schema({
    id: Number,
    seller: String,
    description: String,
    startingPrice: Number,
    startDate: Date,
    endDate: Date,
    currentBidder: String,
    currentBid: Number
});
const AuctionItemModel = model('AuctionItem', auctionItemSchema);
export default AuctionItemModel;