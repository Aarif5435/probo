"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStockBalance = void 0;
const db_1 = require("../db");
const getStockBalance = (req, res) => {
    try {
        if (!db_1.STOCK_BALANCE) {
            res.status(401).send({ message: "No Stock Balance Available" });
        }
        res
            .status(200)
            .send({ messsage: "successfully fetch stock balance", STOCK_BALANCE: db_1.STOCK_BALANCE });
    }
    catch (err) {
        throw err;
    }
};
exports.getStockBalance = getStockBalance;
