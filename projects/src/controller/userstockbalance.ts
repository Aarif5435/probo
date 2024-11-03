import { Request, Response } from "express";
import { STOCK_BALANCE, USER } from "../db";

export const getUserStockBalance = (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    if (!USER[userId]) {
      res.status(400).send({ message: "user not found" });
    }
    if (STOCK_BALANCE[userId] !== undefined) {
      res
        .status(201)
        .send({
          message: "stock balance of user is successfully fetched",
          [userId]: STOCK_BALANCE[userId],
        });
    } else {
      res
        .status(200)
        .send({
          message: "No stock balance found for this user",
          stockBalacne: STOCK_BALANCE,
        });
    }
  } catch (err) {
    throw err;
  }
};
