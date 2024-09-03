import { del, get, patch, post } from "../utils/request";

export const getProductList = async () => {
  return await get("products");
};

export const createProduct = async (option) => {
  return await post(option, "products");
}

export const deleteProduct = async (item) => {
  return await del("products", item.id);
}

export const editProduct = async (item, option) => {
  return await patch(item.id, option, "products");
}