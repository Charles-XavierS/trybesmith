import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/userInterface';
import connection from './connection';

const createUser = async (user: User) => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?);',
    [username, classe, level, password],
  );
  return { id: result.insertId, username, classe, level, password };
};

export default { createUser };
