import { post } from "../utils/request";

export const bookRoom = async (option) => {
  return await post(option, "book-room");
};

