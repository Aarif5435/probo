"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inrbalance_1 = require("../controller/inrbalance");
const stockbalance_1 = require("../controller/stockbalance");
const userbalance_1 = require("../controller/userbalance");
const userstockbalance_1 = require("../controller/userstockbalance");
const router = express_1.default.Router();
router.get('/inr', inrbalance_1.getBalance);
router.get('/stock', stockbalance_1.getStockBalance);
router.get('/inr/:userId', userbalance_1.getUserBalance);
router.get('/stock/:userId', userstockbalance_1.getUserStockBalance);
exports.default = router;
