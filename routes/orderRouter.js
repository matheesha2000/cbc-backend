import express from 'express';
import { createOrder } from '../controllers/orderController.js';
import { getOrders } from '../controllers/orderController.js';
import { getQuote } from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post("/",createOrder);
orderRouter.get("/",getOrders);
orderRouter.get("/quote",getQuote);

export default orderRouter;