"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyOrder = void 0;
const db_1 = require("../db");
const orderType = (order) => {
    return order.map((val) => val.type).join('');
};
const buyOrder = (req, res) => {
    const { userId, stockSymbol, quantity, price, stockType } = req.body;
    try {
        // let ORDERBOOKCOPY = JSON.parse(JSON.stringify(ORDER_BOOK))
        let stockValidatedStockType = stockType;
        let validatedStockType = stockType;
        let opositePrice = 1000 - price;
        let opositeType = validatedStockType === "yes" ? "no" : "yes";
        if (!db_1.USER[userId]) {
            res.status(401).send({ message: "User not found" });
        }
        if (db_1.INR_BALANCES[userId].balance < price * quantity) {
            res.status(400).send({ message: "unsufficiant balance" });
            return;
        }
        //  CASE 1 IF ORDER BOOK IS EMPTY
        if (!db_1.ORDER_BOOK[stockSymbol][validatedStockType] ||
            !db_1.ORDER_BOOK[stockSymbol][validatedStockType][price]) {
            db_1.ORDER_BOOK[stockSymbol][opositeType][opositePrice] = {
                total: quantity,
                orders: [{ userId, quantity: quantity, type: "buy" }],
            };
            // console.log(STOCK_BALANCE);
            // STOCK_BALANCE[userId] = {
            //   [stockSymbol]: {
            //     [stockValidatedStockType]: { quantity: 0, locked: 0 },
            //   },
            // };
            db_1.INR_BALANCES[userId].balance =
                db_1.INR_BALANCES[userId].balance - price * quantity;
            db_1.INR_BALANCES[userId].locked =
                db_1.INR_BALANCES[userId].locked + price * quantity;
            res.status(200).send({
                message: "Order book updated",
                ORDER_BOOK: db_1.ORDER_BOOK,
                STOCK_BALANCE: db_1.STOCK_BALANCE,
                INR_BALANCES: db_1.INR_BALANCES,
            });
        }
        if (db_1.ORDER_BOOK[stockSymbol][validatedStockType] &&
            db_1.ORDER_BOOK[stockSymbol][validatedStockType][price]) {
            let obj = db_1.ORDER_BOOK[stockSymbol][validatedStockType][price];
            if (obj.total <= quantity) {
                if (orderType(obj.orders) === 'buy') {
                    db_1.STOCK_BALANCE[userId] = {
                        [stockSymbol]: {
                            [stockValidatedStockType]: { quantity, locked: 0 }
                        }
                    };
                }
                db_1.ORDER_BOOK[stockSymbol][validatedStockType][price] = { total: 0, orders: [] };
            }
        }
    }
    catch (err) {
        throw err;
    }
};
exports.buyOrder = buyOrder;
