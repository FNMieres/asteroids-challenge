import axios from "axios";
import { AsteroidElement } from "../../types";

export function fetchAsteroid(id: string) {
  return axios.get<AsteroidElement>(
    `http://localhost:3001/api/asteroids/${id}`,
  );
}
