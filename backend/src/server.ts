import express, {Request, Response} from "express";
import cors from "cors";
import { loginUser, registerUser } from "./authenticate.js";
import {GetAuctionItems, GetAuctionItem, AddAuctionItem, MakeBid, DeleteAuctionItem} from "./auction.js";
import IUser from "./models/IUser.js";
import IAuctionItem from "./models/IAuctionItem.js";
import IBidInfo from "./models/IBidInfo.js";

const server = express();
const PORT = 5000;

/*
**************************
Middleware
**************************
*/
server.use(cors({
    origin: 'http://localhost:3000'
}));

server.use(express.json())

/*
**************************
Authenticate Controller 
**************************
*/

// takes user as additional argument; should we make this get??
server.post("/login", (req: Request<{},{},IUser>, res: Response) => {
    console.log(req.body);
    res.send({"authResult": loginUser(req.body)});
}) 

server.post("/register", (req: Request<{},{},IUser>, res: Response) => {
    res.send({"registerResult": registerUser(req.body)});
}) 



/*
**************************
Auction Controller 
**************************
*/

server.get("/GetAuctionItems", (req: Request, res: Response) => {
    res.send(GetAuctionItems());
})

server.get("/GetAuctionItem")

server.post("/AddAuctionItem", (req: Request<{},{},IAuctionItem>, res: Response) => {
    res.send({"addResult": AddAuctionItem(req.body)});
})

server.post("/MakeBid", (req: Request<{},{},IBidInfo>, res: Response) => {
    console.log(req.body);
    res.send({"bidResult": MakeBid(req.body)});
})

server.delete("/DeleteAuctionItem")

/*
************************** 
Server Startup
**************************
*/

server.listen(PORT, () => {
    console.log(`Node server running on port: ${PORT}`)
});
