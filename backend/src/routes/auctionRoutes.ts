import {Request, Response, Router} from "express";
import {AddAuctionItem, GetAuctionItems, MakeBid} from "../handlers/auction.ts";
import IAuctionItem from "../models/IAuctionItem.ts";
import IBidInfo from "../models/IBidInfo.ts";

const router = Router();
router.get("/GetAuctionItems", (req: Request, res: Response) => {
    res.send(GetAuctionItems());
})


router.post("/AddAuctionItem", (req: Request<{},{},IAuctionItem>, res: Response) => {
    res.send({"addResult": AddAuctionItem(req.body)});
})

router.post("/MakeBid", (req: Request<{},{},IBidInfo>, res: Response) => {
    console.log(req.body);
    res.send({"bidResult": MakeBid(req.body)});
})

export default router;