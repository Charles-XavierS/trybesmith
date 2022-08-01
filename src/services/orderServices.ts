// import { Order } from '../interfaces/orderInterface';
import ordersModel from '../models/orderModel';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  return orders;
};

export default { getAllOrders };
