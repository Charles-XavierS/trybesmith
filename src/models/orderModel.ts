import connection from './connection';
import { Order } from '../interfaces/orderInterface';

const getAllOrders = async (): Promise<Order[]> => {
  const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
  FROM Trybesmith.Orders AS ord
  INNER JOIN Trybesmith.Products AS prod
  ON prod.orderId = ord.id
  GROUP BY ord.id
  ORDER BY ord.userId`;
  const [rows] = await connection.execute(query);
  const orders = rows as Order[];
  orders.map(({ id, userId, products }) => ({ id, userId, products }));
  return orders;
};

export default { getAllOrders };
