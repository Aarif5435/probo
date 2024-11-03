import { Request, Response } from "express"
import { INR_BALANCES, ORDER_BOOK, STOCK_BALANCE } from "../db";

const ClearObject = (obj: any) =>{
   Object.keys(obj).forEach(val=> delete obj[val]);
}

export const Reset = (req: Request, res: Response) =>{
   try{
    ClearObject(INR_BALANCES);
    ClearObject(ORDER_BOOK);
    ClearObject(STOCK_BALANCE);
    res.status(401).send({message: "all data is reset successfully", INR_BALANCES, ORDER_BOOK, STOCK_BALANCE})
   }catch(err){
    throw err;
   }
}