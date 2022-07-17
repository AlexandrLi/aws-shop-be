import { db } from "../db";

export type Product = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  price: number;
  count: number;
};

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(db.products);
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.id === id);
}
