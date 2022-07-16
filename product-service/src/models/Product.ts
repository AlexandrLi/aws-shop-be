import { db } from "../db";

export function getProducts() {
  return Promise.resolve(db.products);
}

export async function getProductById(id: number) {
  const products = await getProducts();
  return products.find((p) => p.id === id);
}
