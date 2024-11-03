"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSymbol = void 0;
const db_1 = require("../db");
const createSymbol = (req, res) => {
    const { symbol } = req.params;
    try {
        if (db_1.ORDER_BOOK[symbol]) {
            res.status(401).send({ message: "symbole already exist" });
            return;
        }
        db_1.ORDER_BOOK[symbol] = {
            yes: {},
            no: {}
        };
        res.status(200).send({ message: 'symbol created successfully', ORDER_BOOK: db_1.ORDER_BOOK });
    }
    catch (err) {
        throw err;
    }
};
exports.createSymbol = createSymbol;
