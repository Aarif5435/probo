"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const buyorder_1 = require("../controller/buyorder");
const router = express_1.default.Router();
router.post('/buy', buyorder_1.buyOrder);
exports.default = router;
