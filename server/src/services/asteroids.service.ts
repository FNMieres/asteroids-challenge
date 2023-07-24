import QueryString from "qs";
import { asteroidsAPI } from "../utils/axiosInstance";
import { type NEOResponse } from "../types";
import { AsteroidsFavoriteModel } from "../models/favoriteAsteroid.model";

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

export async function findFavoritesAsteroids() {
  const response = await AsteroidsFavoriteModel.find({});

  return response.map((obj) => obj.value);
}

export async function findFavoritesAsteroidByValue(value: string) {
  const response = await AsteroidsFavoriteModel.findOne({ value });

  return response;
}

export async function createFavoriteAsteroid(value: string) {
  const newFavorite = new AsteroidsFavoriteModel({ value });
  await newFavorite.save();

  return newFavorite;
}

export async function deleteFavoriteAsteroid(value: string) {
  await AsteroidsFavoriteModel.deleteOne({ value });

  return value;
}
