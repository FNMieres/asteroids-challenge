import { NextFunction, Request, Response } from "express";
import { findAsteroids } from "../services/asteroids.service";

export async function getAsteroidsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const asteroids = await findAsteroids(req.query);

    res.json(asteroids);
  } catch (err) {
    next(err);
  }
}
