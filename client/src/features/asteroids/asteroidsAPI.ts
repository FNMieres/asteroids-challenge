import axios from "axios";
import { NearEarthObject } from "../../types";

export function fetchAsteroids(startDate: string, endDate: string) {
  return axios.get<NearEarthObject[]>(
    `http://localhost:3001/api/asteroids?start_date=${startDate}&end_date=${endDate}`,
  );
}

export function fetchAsteroid(id: string) {
  return axios.get<NearEarthObject>(
    `http://localhost:3001/api/asteroids/${id}`,
  );
}
