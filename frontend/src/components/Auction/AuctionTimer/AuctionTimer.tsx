import React, { useState, useEffect, useContext } from 'react';
import { AuctionItemContext } from '../../../contexts/contexts.ts';
import timeDiff from '../../../utils/time.ts';

interface AuctionTimerData {
    startDate: Date, 
    endDate:Date
}

function AuctionTimer() {

    const auctionItem = useContext(AuctionItemContext)

    const [timer, setTimer] = useState(timeDiff(new Date(), new Date(auctionItem.endDate)))

    useEffect(() => {
        const interval = setInterval(() => {
            //not very efficient!!! every time recomputes the new date difference, but only need to do this once!!!!
            setTimer(timeDiff(new Date(), new Date(auctionItem.endDate)));
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <p id="startDate">Start Date: {new Date(auctionItem.startDate).toLocaleString()}</p>
            <p id="endDate">End Date: {new Date(auctionItem.endDate).toLocaleString()}</p>
            <p id="timer">{timer[0]}:{timer[1]}:{timer[2]}:{timer[3]}</p>
        </div>
    );
}

export default AuctionTimer;