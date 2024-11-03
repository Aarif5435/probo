import express from "express";
import { createUser } from "../controller/user";


const router = express.Router();

router.post("/create/:userId", createUser);

export default router;