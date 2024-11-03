import express from "express";
import userRouter from "./routes/user";
import symbolRouter from "./routes/symbol";
import orderbookRouter from "./routes/orderbook";
import balanceRouter from "./routes/balance";
import resetRouter from "./routes/reset";
import onramInrRouter from "./routes/onramp";
import ordersRouter from "./routes/order"

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/user',userRouter);

app.use('/api/v1/symbol', symbolRouter);

app.use('/api/v1/orderbook',orderbookRouter);

app.use('/api/v1/balance', balanceRouter);

app.use('/api/v1/reset',resetRouter);

app.use('/api/v1/onramp', onramInrRouter);

app.use('/api/v1/order',ordersRouter);


app.listen(port,()=>{
    console.log('listening at :', port)
});




