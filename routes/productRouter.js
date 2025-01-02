import express from 'express';
import { createProduct } from '../controllers/productController.js';
import { getProducts } from '../controllers/productController.js';
import { deleteProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProduct);

export default productRouter;