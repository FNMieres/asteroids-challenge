import QueryString from "qs";
import { asteroidsAPI } from "../utils/axiosInstance";

export async function findAsteroids(queryParams: QueryString.ParsedQs) {
  const response = await asteroidsAPI.get(`/v1/feed`, {
    params: queryParams,
  });

  return response.data;
}
