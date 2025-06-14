import { RequestHandler } from "express";
import { Product } from "../models/product";
const products: Product[] = [{ id: "agg", productName: "Nike Shoes", quantity: 5 }];
export const addProduct:RequestHandler=(req,res,next)=>{
    const id=(req.body.id) as string;
    const productName=(req.body.productName) as string;
    const quantity=(req.body.quantity) as number;
    const newProduct=new Product(id,productName,quantity);
    products.push(newProduct);
    res.status(201).json({message:"Product added",addedProduct:newProduct});
}
export const getProduct:RequestHandler=(req,res,next)=>{
 res.json({products});
}
export const updateProduct: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  const { productName, quantity } = req.body;

  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  products[productIndex] = {
    ...products[productIndex],
    productName: productName ?? products[productIndex].productName,
    quantity: quantity ?? products[productIndex].quantity,
  };

  res.json({
    message: `Product ${id} updated.`,
    updatedProduct: products[productIndex],
  });
  return;
};
  

export const deleteProduct: RequestHandler = (req, res, next) => {
  const { id } = req.params;

  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const deletedProduct = products.splice(productIndex, 1);
  res.json({ message: `Product ${id} deleted.`, deletedProduct });
};
  