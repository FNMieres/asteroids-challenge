import axios from "axios";
import { AsteroidElement } from "../../types";

export function fetchAsteroid(id: string) {
  return axios.get<AsteroidElement>(
    `http://localhost:3001/api/asteroids/${id}`,
  );
}

export function addFavoriteAsteroid(id: string) {
  return axios.post<string>(
    `http://localhost:3001/api/asteroids/favorites/${id}`,
  );
}

export function removeFavoriteAsteroid(id: string) {
  return axios.delete<string>(
    `http://localhost:3001/api/asteroids/favorites/${id}`,
  );
}
