import React, {useState, useEffect} from 'react';
import { AuctionAdder, ActiveAuctions } from '../../components';

function AuctionLayout() {
    

    return (
        <div>
            <nav>
                <ol>
                    <li><a>Profile</a></li>
                    <li><a>My Auctions</a></li>
                    <li><a>Log Out</a></li>
                </ol>
            </nav>
            <AuctionAdder/>
            <ActiveAuctions/>
        </div>
    );
}

export default AuctionLayout;