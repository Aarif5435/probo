"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const db_1 = require("../db");
const createUser = (req, res) => {
    try {
        const { userId } = req.params;
        if (db_1.USER[userId]) {
            res.status(401).send({ message: "user already exist" });
            return;
        }
        if (!db_1.USER[userId]) {
            db_1.USER[userId] = { userId };
            db_1.INR_BALANCES[userId] = { balance: 0, locked: 0 };
        }
        res
            .status(201)
            .send({
            message: "user created successfully",
            INR_BALANCES: db_1.INR_BALANCES,
        });
    }
    catch (err) {
        throw err;
    }
};
exports.createUser = createUser;
