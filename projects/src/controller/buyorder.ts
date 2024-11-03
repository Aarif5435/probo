import { Request, Response } from "express";
import { INR_BALANCES, ORDER_BOOK, STOCK_BALANCE, USER } from "../db";
import { ASSETENTRY, ORDERTYPE, STATUS, TRADEOPTION } from "../db/type";

interface BodyType {
  userId: string;
  stockSymbol: string;
  price: number;
  stockType: string;
  quantity: number;
}

const orderType = (order:ORDERTYPE[])=>{
  return order.map((val)=>  val.type).join('')
}

export const buyOrder = (req: Request, res: Response) => {
  const { userId, stockSymbol, quantity, price, stockType }: BodyType =
    req.body;
  try {
    // let ORDERBOOKCOPY = JSON.parse(JSON.stringify(ORDER_BOOK))
    let stockValidatedStockType = stockType as keyof TRADEOPTION;
    let validatedStockType = stockType as keyof ASSETENTRY;
    let opositePrice = 1000 - price;
    let opositeType: keyof ASSETENTRY =
      validatedStockType === "yes" ? "no" : "yes";

    if (!USER[userId]) {
      res.status(401).send({ message: "User not found" });
    }

    if (INR_BALANCES[userId].balance < price * quantity) {
      res.status(400).send({ message: "unsufficiant balance" });
      return;
    }
    //  CASE 1 IF ORDER BOOK IS EMPTY
    if (
      !ORDER_BOOK[stockSymbol][validatedStockType] ||
      !ORDER_BOOK[stockSymbol][validatedStockType][price]
    ) {
      ORDER_BOOK[stockSymbol][opositeType][opositePrice] = {
        total: quantity,
        orders: [{ userId, quantity: quantity, type: "buy" }],
      };
      // console.log(STOCK_BALANCE);
      // STOCK_BALANCE[userId] = {
      //   [stockSymbol]: {
      //     [stockValidatedStockType]: { quantity: 0, locked: 0 },
      //   },
      // };
      INR_BALANCES[userId].balance =
        INR_BALANCES[userId].balance - price * quantity;
      INR_BALANCES[userId].locked =
        INR_BALANCES[userId].locked + price * quantity;
      res.status(200).send({
        message: "Order book updated",
        ORDER_BOOK,
        STOCK_BALANCE,
        INR_BALANCES,
      });
    } if (
      ORDER_BOOK[stockSymbol][validatedStockType] &&
      ORDER_BOOK[stockSymbol][validatedStockType][price]
    ){
      let obj = ORDER_BOOK[stockSymbol][validatedStockType][price];
      if(obj.total <= quantity){
        if(orderType(obj.orders) === 'buy'){
          STOCK_BALANCE[userId] = {
            [stockSymbol]:{
              [stockValidatedStockType]: {quantity, locked: 0}
            }
          }
        }
        ORDER_BOOK[stockSymbol][validatedStockType][price] = {total: 0, orders: []}
          
      }


    }
  } catch (err) {
    throw err;
  }
};
