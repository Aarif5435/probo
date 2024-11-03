import express from 'express';
import { Reset } from '../controller/reset';

const router = express.Router();

router.post('/', Reset);

export default router;