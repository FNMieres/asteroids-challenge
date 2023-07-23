import QueryString from "qs";
import { asteroidsAPI } from "../utils/axiosInstance";
import { type NEOResponse } from "../types";

export async function searchAsteroids(queryParams: QueryString.ParsedQs) {
  const response = await asteroidsAPI.get<NEOResponse>(`/v1/feed`, {
    params: queryParams,
  });

  return response.data;
}

export async function findAsteroidById(id: string) {
  const response = await asteroidsAPI.get<NEOResponse>(`/v1/neo/${id}`);

  return response.data;
}
