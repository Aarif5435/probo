import express from "express";
import { buyOrder } from "../controller/buyorder";

const router = express.Router();

router.post('/buy', buyOrder);

export default router;