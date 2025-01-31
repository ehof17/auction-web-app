import React, {useState, useEffect} from 'react';
import addAuctionItem from '../../../api_fetches/addAuctionItem.ts';

function AuctionAdder() {
    const [addAuctionItemAttempt, setAddAuctionItemAttempt] = useState(false);
    const [seller, setSeller] = useState("");
    const [description, setDescription] = useState("");
    const [startingPrice, setStartingPrice] = useState(0.0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        if (addAuctionItemAttempt) {
            addAuctionItem({
                id: -1, 
                seller: seller, 
                description: description, 
                startingPrice: startingPrice, 
                currentBidder: "", 
                currentBid: 0.0, 
                startDate: startDate, 
                endDate: endDate
            }).then(success => {
                success ? console.log("Auction item was successfully added!") : console.log("Auction item could not be added.");
                setAddAuctionItemAttempt(false);
            });
        }
    }, [addAuctionItemAttempt]);

    return (
        <div className="auction-item-adder">
            <label htmlFor="seller">Seller:</label>
            <input type="text" id="seller" onChange={e => setSeller(e.target.value)}/> {/*Will later be removed and replaced by session state (using logged in user info)*/}
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" onChange={e => setDescription(e.target.value)}/>
            <label htmlFor="startingPrice">Starting Price:</label>
            <input type="number" min="0.00" step="0.01" id="startingPrice" onChange={e => setStartingPrice(e.target.value)}/> {/*https://stackoverflow.com/questions/24163889/html5-input-for-money-currency*/}
            <label htmlFor="startDate">Start Date:</label>
            <input type="datetime-local" id="startDate" onChange={e => setStartDate(e.target.value)}/> {/*Wonder if there is a better option for this or perhaps a way to enhance/make it more robust. Explore potential problems with availaibility and format.*/}
            <label htmlFor="endDate">End Date:</label>
            <input type="datetime-local" id="endDate" onChange={e => setEndDate(e.target.value)}/> {/*Make sure start and end dates are appropriate (frontend or backend)?*/}
            <button onClick={() => setAddAuctionItemAttempt(true)}>Add Auction Item</button>
        </div>
    );
}

export default AuctionAdder;