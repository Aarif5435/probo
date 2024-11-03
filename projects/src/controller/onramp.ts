import { Request, Response } from "express";
import { INR_BALANCES, USER } from "../db";

export const onrampBalance = (req: Request, res: Response) => {
  const { userId, amount } = req.body;
  try {
    if (!USER[userId]) {
      res
        .status(400)
        .send({ message: "No such user is exist with this userId" });
    }
    if (INR_BALANCES[userId].balance !== undefined) {
      INR_BALANCES[userId].balance = INR_BALANCES[userId].balance + amount;
      res.status(200).send({
        message: "Amount added to user account successfully",
        [userId]: INR_BALANCES[userId],
      });
    }
  } catch (err) {
    throw err;
  }
};
