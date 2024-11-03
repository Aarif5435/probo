import { Request, Response } from "express";
import { ORDER_BOOK } from "../db";

export const getOrderBook = (req: Request, res: Response) => {
  try {
    if (!ORDER_BOOK) {
      res.status(400).send({ message: "no order book is exist" });
      return
    }
    res.status(200).json({
        message: 'Fetch the order book successfully',
        orderBook: ORDER_BOOK
      });
  } catch (err) {
    console.error("Error fetching order book:", err);
    res.status(500).json({
      message: "Server error while fetching the order book",
      error: err
    });
  }
};
