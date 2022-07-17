import { test, expect, vi } from "vitest";
import { handler } from "../functions/getProductsList";
import * as dbModule from "../db";
import { Product } from "../models/Product";

const mockedProducts: Product[] = [
  {
    id: 1,
    title: "Tarantulace",
    description: "Tarantulace Climbing Shoes - Men's",
    imgSrc:
      "https://www.rei.com/media/0108620f-59fd-4905-babc-38f98930e187.jpg",
    price: 89,
    count: 1,
  },
  {
    id: 2,
    title: "Zone",
    description: "Zone Climbing Shoes",
    imgSrc:
      "https://www.rei.com/media/e4dde7ff-5ec3-40b1-8c7b-294144b00bbb.jpg",
    price: 87.73,
    count: 2,
  },
];

test("Should return product list", async () => {
  vi.spyOn(dbModule, "db", "get").mockReturnValueOnce({
    products: mockedProducts,
  });
  const result = await handler();
  expect(result.statusCode).toBe(200);
  expect(result.body).toBe(JSON.stringify(mockedProducts));
});
