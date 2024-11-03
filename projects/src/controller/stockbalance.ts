import { Request, Response } from "express";
import { STOCK_BALANCE } from "../db";

export const getStockBalance = (req: Request, res: Response) => {
  try {
    if (!STOCK_BALANCE) {
      res.status(401).send({ message: "No Stock Balance Available" });
    }
    res
      .status(200)
      .send({ messsage: "successfully fetch stock balance", STOCK_BALANCE });
  } catch (err) {
    throw err;
  }
};
