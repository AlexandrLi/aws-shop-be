import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProductById } from "../models/Product";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const { productId } = event.pathParameters as { productId: string };
  const product = await getProductById(Number(productId));
  if (!product) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Product not found" }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
}
