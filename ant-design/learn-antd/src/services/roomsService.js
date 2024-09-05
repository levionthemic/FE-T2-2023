import { del, get, post } from "../utils/request";

export const createRoom = async (options) => {
  return await post(options, "rooms");
}

export const getListRoom = async () => {
  return await get("rooms");
}

export const deleteRoom = async (id) => {
  return await del("rooms", id);
}