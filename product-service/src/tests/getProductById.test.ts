import { describe, it, expect, vi } from "vitest";
import { handler } from "../functions/getProductById";
import * as dbModule from "../db";
import { Product } from "../models/Product";

const mockedProduct: Product = {
  id: 1,
  title: "Tarantulace",
  description: "Tarantulace Climbing Shoes - Men's",
  imgSrc: "https://www.rei.com/media/0108620f-59fd-4905-babc-38f98930e187.jpg",
  price: 89,
  count: 1,
};

describe("getProductById handler", () => {
  it("Should return product with matched id", async () => {
    vi.spyOn(dbModule, "db", "get").mockReturnValueOnce({
      products: [mockedProduct],
    });
    const event: any = {
      pathParameters: { productId: `${mockedProduct.id}` },
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify(mockedProduct));
  });

  it("Should return product not found", async () => {
    vi.spyOn(dbModule, "db", "get").mockReturnValueOnce({
      products: [mockedProduct],
    });
    const event: any = {
      pathParameters: { productId: "wrong-id" },
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(404);
    expect(result.body).toBe(JSON.stringify({ error: "Product not found" }));
  });
});
