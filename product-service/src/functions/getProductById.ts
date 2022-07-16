import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getProductById } from "../models/Product";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const { id } = event.pathParameters as { id: string };
  const product = await getProductById(Number(id));
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
