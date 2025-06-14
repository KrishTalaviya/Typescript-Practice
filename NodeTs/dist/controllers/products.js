"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.addProduct = void 0;
const product_1 = require("../models/product");
const products = [{ id: "agg", productName: "Nike Shoes", quantity: 5 }];
const addProduct = (req, res, next) => {
    const id = (req.body.id);
    const productName = (req.body.productName);
    const quantity = (req.body.quantity);
    const newProduct = new product_1.Product(id, productName, quantity);
    products.push(newProduct);
    res.status(201).json({ message: "Product added", addedProduct: newProduct });
};
exports.addProduct = addProduct;
const getProduct = (req, res, next) => {
    res.json({ products });
};
exports.getProduct = getProduct;
const updateProduct = (req, res, next) => {
    const { id } = req.params;
    const { productName, quantity } = req.body;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    products[productIndex] = {
        ...products[productIndex],
        productName: productName !== null && productName !== void 0 ? productName : products[productIndex].productName,
        quantity: quantity !== null && quantity !== void 0 ? quantity : products[productIndex].quantity,
    };
    res.json({
        message: `Product ${id} updated.`,
        updatedProduct: products[productIndex],
    });
    return;
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    const deletedProduct = products.splice(productIndex, 1);
    res.json({ message: `Product ${id} deleted.`, deletedProduct });
};
exports.deleteProduct = deleteProduct;
