import { Order, OrderDetailItem, OrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./https";

// export const order = async (orderData: OrderSheet) => {
//   const response = await httpClient.post("/orders", orderData);
//   return response.data;
// };
export const order = async (orderData: OrderSheet) => {
  return await requestHandler<OrderSheet>("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  return await requestHandler<OrderSheet>("get", "/orders");
};

export const fetchOrder = async (orderId: number) => {
  return await requestHandler<OrderSheet>("get", "/orders/${orderId}");
};
