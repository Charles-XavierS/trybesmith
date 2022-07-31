import { Router } from 'express';
import productController from '../controllers/productController';

const product = Router();

product.post('/products', productController.create);

export default product;
