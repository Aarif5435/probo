import express from 'express';
import { onrampBalance } from '../controller/onramp';

const router = express.Router();

router.post('/inr', onrampBalance);

export default router;