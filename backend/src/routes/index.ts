import { Router } from "express";
import authRoutes from "./authRoutes";
import auctionRoutes from "./auctionRoutes";

const router = Router();

// prefix the routes to keep them seperate
router.use("/auth", authRoutes);
router.use("/auction", auctionRoutes);

export default router;