import { Request, Response } from "express"
import { INR_BALANCES } from "../db"

export const getBalance = (req: Request, res: Response)=>{
   try{
      if(!INR_BALANCES){
        res.status(401).send({message: "No user balance exist"});
      }
      res.status(201).send({message: "Inr balance", INR_BALANCES})
   }catch(err){
     throw err
   }
}