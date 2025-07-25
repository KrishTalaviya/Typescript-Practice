"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
router.get('/', products_1.getProduct);
router.post('/addProduct', products_1.addProduct);
router.patch('/updateProduct/:id', products_1.updateProduct);
router.delete('/deleteProduct/:id', products_1.deleteProduct);
exports.default = router;
