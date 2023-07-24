import express from "express";
import {
  getAsteroidHandler,
  getAsteroidsHandler,
  getFavoriteAsteroidHandler,
  postFavoriteAsteroidHandler,
  deleteFavoriteAsteroidHandler,
} from "../controllers/asteroids.controller";

const router = express.Router();

router.get("/", getAsteroidsHandler);
router.get("/:id", getAsteroidHandler);
router.get("/favorites/:id", getFavoriteAsteroidHandler);
router.post("/favorites/:id", postFavoriteAsteroidHandler);
router.delete("/favorites/:id", deleteFavoriteAsteroidHandler);

export default router;
