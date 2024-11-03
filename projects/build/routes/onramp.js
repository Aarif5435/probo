"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const onramp_1 = require("../controller/onramp");
const router = express_1.default.Router();
router.post('/inr', onramp_1.onrampBalance);
exports.default = router;
