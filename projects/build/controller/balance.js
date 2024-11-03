"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const db_1 = require("../db");
const getBalance = (req, res) => {
    try {
        if (!db_1.INR_BALANCES) {
            res.status(401).send({ message: "No user balance exist" });
        }
        res.status(201).send({ message: "Inr balance", INR_BALANCES: db_1.INR_BALANCES });
    }
    catch (err) {
        throw err;
    }
};
exports.getBalance = getBalance;
