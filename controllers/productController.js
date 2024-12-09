import Product from "../models/product.js";
import { isAdmin } from "./userController";

export function createProduct(req,res){

    if(!isAdmin(req)){
        res.json({
            message : "Please login as administrator to add products"
        })
        return
    }

    const newProductData = req.body;

    const product = new Product(newProductData);

    product.save().then(
        ()=>{
            res.json({
                message : "Product created"
            })
        }
    ).catch(
        (error)=>{
            res.json({
                message : error.message
            })
        }
    )

}  

export function getProducts(req,res){

    Product.find({}).then(
        (products)=>{
            res.json(products)
        })
}





