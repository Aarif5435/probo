import express from "express";
import { createSymbol } from "../controller/symbol";


const router = express.Router();

router.post("/create/:symbol", createSymbol);

export default router;