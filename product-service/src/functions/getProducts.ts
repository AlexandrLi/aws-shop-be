import { APIGatewayProxyResult } from "aws-lambda";
import { getProducts } from "../models/Product";

export async function handler(): Promise<APIGatewayProxyResult> {
  const products = await getProducts();
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
}
