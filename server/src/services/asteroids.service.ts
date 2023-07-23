import QueryString from "qs";
import { asteroidsAPI } from "../utils/axiosInstance";
import { type NEOResponse } from "../types";

export async function findAsteroids(queryParams: QueryString.ParsedQs) {
  const response = await asteroidsAPI.get<NEOResponse>(`/v1/feed`, {
    params: queryParams,
  });

  return response.data;
}
