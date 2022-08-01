import { Router } from 'express';
import productController from '../controllers/productController';

const product = Router();

product.post('/products', productController.create);
product.get('/products', productController.getAllProducts);

export default product;
