import { Product } from '../interfaces/productInterface';
import productModel from '../models/productModel';

const create = async (product: Product): Promise<Product> => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productModel.getAllProducts();
  return products;
};

export default { create, getAllProducts };