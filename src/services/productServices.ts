import { Product } from '../interfaces/productInterface';
import createProduct from '../models/productModel';

const create = async (product: Product): Promise<Product> => {
  const newProduct = await createProduct.createProduct(product);
  return newProduct;
};

export default { create };