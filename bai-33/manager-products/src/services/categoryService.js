import { get } from "../utils/request";

export const getListCategory = async () => {
  return await get("category");
};
