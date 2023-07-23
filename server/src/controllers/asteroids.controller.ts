import { NextFunction, Request, Response } from "express";
import { findAsteroidById, searchAsteroids } from "../services/asteroids.service";

export async function getAsteroidsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await searchAsteroids(req.query);

    const asteroids = Object.values(data.near_earth_objects).flat(2);
    const asteroidsCleaned = asteroids.map(({ links, ...rest }) => rest);

    res.json(asteroidsCleaned);
  } catch (err) {
    next(err);
  }
}

export async function getAsteroidHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const asteroid = await findAsteroidById(req.params.id);

    const { links, ...asteroidCleaned } = asteroid;

    res.json(asteroidCleaned);
  } catch (err) {
    next(err);
  }
}
