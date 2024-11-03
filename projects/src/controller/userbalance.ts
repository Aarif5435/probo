import { Request, Response } from "express";
import { INR_BALANCES } from "../db";


export const getUserBalance = (req: Request, res: Response) =>{
   const {userId} = req.params;
    try{
        if(!INR_BALANCES[userId]){
            res.status(400).send({message: `No user is exist with userid- ${userId}`});
            return;
        }
        res.status(401).send({message: "Fetch user balance successfully", [userId]: INR_BALANCES[userId]})
        
    }catch(err){
        throw err;
    }
}