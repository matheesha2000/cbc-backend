import express from 'express';
import { createProduct } from '../controllers/productController.js';
import { getProducts } from '../controllers/productController.js';
import { deleteProduct } from '../controllers/productController.js';
import { updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct);

export default productRouter;