import express from 'express';
import { getBalance } from '../controller/inrbalance';
import { getStockBalance } from '../controller/stockbalance';
import { getUserBalance } from '../controller/userbalance';
import { getUserStockBalance } from '../controller/userstockbalance';

const router = express.Router();

router.get('/inr',getBalance);
router.get('/stock',getStockBalance);
router.get('/inr/:userId', getUserBalance);
router.get('/stock/:userId', getUserStockBalance)

export default router;