"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBalance = void 0;
const db_1 = require("../db");
const getUserBalance = (req, res) => {
    const { userId } = req.params;
    try {
        if (!db_1.INR_BALANCES[userId]) {
            res.status(400).send({ message: `No user is exist with userid- ${userId}` });
            return;
        }
        res.status(401).send({ message: "Fetch user balance successfully", [userId]: db_1.INR_BALANCES[userId] });
    }
    catch (err) {
        throw err;
    }
};
exports.getUserBalance = getUserBalance;
