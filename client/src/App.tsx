import { useEffect, useState } from "react";
import axios from "axios";
import { type NearEarthObject } from "./types";
import "./App.css";
import DateInput from "./components/DateInput";

function App() {
  const [asteroids, setAsteroids] = useState<NearEarthObject[]>();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<NearEarthObject[]>("http://localhost:3001/api/asteroids")
      .then(({ data }) => {
        setAsteroids(data);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get<NearEarthObject[]>(
        `http://localhost:3001/api/asteroids?start_date=${startDate}&end_date=${endDate}`
      )
      .then(({ data }) => {
        setAsteroids(data);
      })
      .catch((err) => {
        setError(err.message);
        setAsteroids([]);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <DateInput
            id="startDate"
            label="Start date"
            onChange={(value: string) => {
              setStartDate(value);
            }}
            value={startDate}
          />
          <DateInput
            id="endDate"
            label="End date"
            onChange={(value: string) => {
              setEndDate(value);
            }}
            value={endDate}
          />
          <input type="submit" />
        </form>
      </div>
      {error}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Estimated diameter</th>
            <th>Hazardous asteroid</th>
            <th>Velocity</th>
            <th>Close approach</th>
          </tr>
        </thead>
        <tbody>
          {asteroids?.map((asteroid) => (
            <tr key={asteroid.id}>
              <td>{asteroid.name}</td>
              <td>
                {asteroid.estimated_diameter.meters.estimated_diameter_max}
              </td>
              <td>
                {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
              </td>
              <td>
                {
                  asteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                }
              </td>
              <td>
                {asteroid.close_approach_data[0].close_approach_date.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
