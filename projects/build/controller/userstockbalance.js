"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserStockBalance = void 0;
const db_1 = require("../db");
const getUserStockBalance = (req, res) => {
    const { userId } = req.params;
    try {
        if (!db_1.USER[userId]) {
            res.status(400).send({ message: "user not found" });
        }
        if (db_1.STOCK_BALANCE[userId] !== undefined) {
            res
                .status(201)
                .send({
                message: "stock balance of user is successfully fetched",
                [userId]: db_1.STOCK_BALANCE[userId],
            });
        }
        else {
            res
                .status(200)
                .send({
                message: "No stock balance found for this user",
                stockBalacne: db_1.STOCK_BALANCE,
            });
        }
    }
    catch (err) {
        throw err;
    }
};
exports.getUserStockBalance = getUserStockBalance;
