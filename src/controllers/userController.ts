import { Request, Response } from 'express';
import userServices from '../services/userServices';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await userServices.createUser({ username, classe, level, password });
  res.status(201).json({ token });
};

export default { createUser };