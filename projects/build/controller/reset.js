"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reset = void 0;
const db_1 = require("../db");
const ClearObject = (obj) => {
    Object.keys(obj).forEach(val => delete obj[val]);
};
const Reset = (req, res) => {
    try {
        ClearObject(db_1.INR_BALANCES);
        ClearObject(db_1.ORDER_BOOK);
        ClearObject(db_1.STOCK_BALANCE);
        res.status(401).send({ message: "all data is reset successfully", INR_BALANCES: db_1.INR_BALANCES, ORDER_BOOK: db_1.ORDER_BOOK, STOCK_BALANCE: db_1.STOCK_BALANCE });
    }
    catch (err) {
        throw err;
    }
};
exports.Reset = Reset;
