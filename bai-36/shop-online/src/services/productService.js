import { get } from "../utils/request";

export const getProductList = async () => {
  return await get("products");
};

