import { Request, Response } from "express";
import { INR_BALANCES, USER } from "../db";

export const createUser = (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (USER[userId]) {
      res.status(401).send({ message: "user already exist" });
      return;
    }
    if (!USER[userId]) {
      USER[userId] = {userId}
      INR_BALANCES[userId] = { balance: 0, locked: 0 };
    }
    res
      .status(201)
      .send({ 
        message: "user created successfully", 
        INR_BALANCES,
      });
  } catch (err) {
    throw err;
  }
};
