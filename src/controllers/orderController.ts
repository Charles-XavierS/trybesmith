import { Request, Response } from 'express';
import orderService from '../services/orderServices';

const getAllOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
};

export default { getAllOrders };
