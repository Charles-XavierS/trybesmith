import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/productInterface';
import connection from './connection';

const createProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.Products (name, amount) 
  VALUES (?, ?)`;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    query,
    [name, amount],
  );
  const newProduct: Product = { id, name, amount };
  return newProduct;
};

export default { createProduct };
