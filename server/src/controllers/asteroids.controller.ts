import { NextFunction, Request, Response } from "express";
import {
  createFavoriteAsteroid,
  deleteFavoriteAsteroid,
  findAsteroidById,
  findFavoritesAsteroidByValue,
  findFavoritesAsteroids,
  searchAsteroids,
} from "../services/asteroids.service";

export async function getAsteroidsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await searchAsteroids(req.query);
    const favorites = await findFavoritesAsteroids();

    const asteroids = Object.values(data.near_earth_objects).flat(2);
    const asteroidsCleaned = asteroids.map(({ links, ...rest }) => rest);
    const asteroidsInjectedFavorite = asteroidsCleaned.map((asteroid) =>
      favorites.some((favoriteId) => favoriteId === asteroid.id)
        ? { ...asteroid, favorite: true }
        : asteroid
    );

    res.json(asteroidsInjectedFavorite);
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

export async function getFavoriteAsteroidHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const favoriteAsteroid = await findFavoritesAsteroidByValue(req.params.id);

    if (favoriteAsteroid) {
      throw new Error("favorite does not exists");
    }

    res.json(favoriteAsteroid);
  } catch (err) {
    next(err);
  }
}

export async function postFavoriteAsteroidHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const alreadyExists = await findFavoritesAsteroidByValue(req.params.id);

    if (alreadyExists) {
      throw new Error("favorite already exists");
    }

    const newFavorite = await createFavoriteAsteroid(req.params.id);

    res.json(newFavorite);
  } catch (err) {
    next(err);
  }
}

export async function deleteFavoriteAsteroidHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const asteroid = await deleteFavoriteAsteroid(req.params.id);

    res.json(asteroid);
  } catch (err) {
    next(err);
  }
}
