import { Router } from 'express';
import orderController from '../controllers/orderController';

const order = Router();

order.get('/orders', orderController.getAllOrders);

export default order;