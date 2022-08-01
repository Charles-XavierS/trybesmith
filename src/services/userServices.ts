import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../interfaces/userInterface';
import userModel from '../models/userModel';

const createToken = async (payload: JwtPayload) => {
  const JWTSECRET = 'senhaSecreta';
  const token = jwt.sign(payload, JWTSECRET, { algorithm: 'HS256', expiresIn: '30d' });
  return token;
};

const createUser = async (user: User): Promise<string> => {
  const newUser = await userModel.createUser(user);
  const token = createToken({ id: newUser.id, username: newUser.username });
  return token;
};

export default { createUser };
