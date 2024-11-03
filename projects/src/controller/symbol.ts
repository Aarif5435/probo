import { Request, Response } from "express";
import { ORDER_BOOK } from "../db";


export const createSymbol = (req:Request,res:Response)=>{
    const {symbol} = req.params;
    try{
     if(ORDER_BOOK[symbol]){
        res.status(401).send({message: "symbole already exist"});
        return;
     }
     ORDER_BOOK[symbol] = {
        yes: {},
        no: {}
     }
     res.status(200).send({message: 'symbol created successfully', ORDER_BOOK})
    }catch(err){
        throw err;
    }
}