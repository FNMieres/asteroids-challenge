import axios from "axios";
import { AsteroidElement } from "../../types";

export function fetchAsteroids(startDate: string, endDate: string) {
  return axios.get<AsteroidElement[]>(
    `http://localhost:3001/api/asteroids?start_date=${startDate}&end_date=${endDate}`,
  );
}
