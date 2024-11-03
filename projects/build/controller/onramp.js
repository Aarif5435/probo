"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onrampBalance = void 0;
const db_1 = require("../db");
const onrampBalance = (req, res) => {
    const { userId, amount } = req.body;
    try {
        if (!db_1.USER[userId]) {
            res
                .status(400)
                .send({ message: "No such user is exist with this userId" });
        }
        if (db_1.INR_BALANCES[userId].balance !== undefined) {
            db_1.INR_BALANCES[userId].balance = db_1.INR_BALANCES[userId].balance + amount;
            res.status(200).send({
                message: "Amount added to user account successfully",
                [userId]: db_1.INR_BALANCES[userId],
            });
        }
    }
    catch (err) {
        throw err;
    }
};
exports.onrampBalance = onrampBalance;
