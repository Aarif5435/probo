"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const symbol_1 = __importDefault(require("./routes/symbol"));
const orderbook_1 = __importDefault(require("./routes/orderbook"));
const balance_1 = __importDefault(require("./routes/balance"));
const reset_1 = __importDefault(require("./routes/reset"));
const onramp_1 = __importDefault(require("./routes/onramp"));
const order_1 = __importDefault(require("./routes/order"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api/v1/user', user_1.default);
app.use('/api/v1/symbol', symbol_1.default);
app.use('/api/v1/orderbook', orderbook_1.default);
app.use('/api/v1/balance', balance_1.default);
app.use('/api/v1/reset', reset_1.default);
app.use('/api/v1/onramp', onramp_1.default);
app.use('/api/v1/order', order_1.default);
app.listen(port, () => {
    console.log('listening at :', port);
});
