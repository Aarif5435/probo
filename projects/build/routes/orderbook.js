"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderbook_1 = require("../controller/orderbook");
const router = express_1.default.Router();
router.get('/', orderbook_1.getOrderBook);
exports.default = router;
