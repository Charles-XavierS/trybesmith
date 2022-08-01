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

const getAllProducts = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [rows] = await connection.execute(query);
  const products = rows as Product[];
  products.map(({ id, name, amount }) => ({ id, name, amount }));
  return products;
};

export default { createProduct, getAllProducts };
