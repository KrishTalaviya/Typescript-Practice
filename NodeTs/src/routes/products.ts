import {Router} from 'express';
import { addProduct,deleteProduct,getProduct, updateProduct} from '../controllers/products';
const router=Router();
router.get('/',getProduct) 
router.post('/addProduct',addProduct)
 router.patch('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct) 
export default router;