"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderBook = void 0;
const db_1 = require("../db");
const getOrderBook = (req, res) => {
    try {
        if (!db_1.ORDER_BOOK) {
            res.status(400).send({ message: "no order book is exist" });
            return;
        }
        res.status(200).json({
            message: 'Fetch the order book successfully',
            orderBook: db_1.ORDER_BOOK
        });
    }
    catch (err) {
        console.error("Error fetching order book:", err);
        res.status(500).json({
            message: "Server error while fetching the order book",
            error: err
        });
    }
};
exports.getOrderBook = getOrderBook;
