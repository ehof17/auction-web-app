import { API_ENDPOINTS } from './constants.ts';
//want to add return type
async function makeBid(bidInfo: {id: number, updatedBidder: string, updatedBid: number}): Promise<boolean> {
    const url = API_ENDPOINTS.MAKE_BID;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: bidInfo.id,
                updatedBidder: bidInfo.updatedBidder,
                updatedBid: bidInfo.updatedBid
            })
        });
    
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json: {"bidResult": boolean} = await response.json();
        return json.bidResult;

    } catch (error) {
        console.log(error.message);
        return false;
    }
    
}

export default makeBid;