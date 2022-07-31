import { Request, Response } from 'express';
import productService from '../services/productServices';

const create = async (req: Request, res: Response) => {
  const { name, amount, id } = req.body;
  const newProduct = await productService.create({ name, amount, id });
  res.status(201).json(newProduct);
};

export default { create };
