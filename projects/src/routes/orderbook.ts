import express from "express";
import { getOrderBook } from "../controller/orderbook";

const router = express.Router();

router.get('/',getOrderBook);

export default router;