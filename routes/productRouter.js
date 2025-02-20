import express from 'express';
import { createProduct, updateProduct, deleteProduct, getProduct, getProducts, searchProducts } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.get("/search/:query",searchProducts);
productRouter.get("/:productId",getProduct);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct);

export default productRouter;