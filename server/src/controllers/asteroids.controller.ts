import { NextFunction, Request, Response } from "express";
import { findAsteroids } from "../services/asteroids.service";

export async function getAsteroidsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await findAsteroids(req.query);

    const asteroids = Object.values(data.near_earth_objects).flat(2);
    const asteroidsCleaned = asteroids.map(({ links, ...rest }) => rest);

    res.json(asteroidsCleaned);
  } catch (err) {
    next(err);
  }
}
