import { Router } from 'express';
import userController from '../controllers/userController';

const user = Router();

user.post('/users', userController.createUser);

export default user;
