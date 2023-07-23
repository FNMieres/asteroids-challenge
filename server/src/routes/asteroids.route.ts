import express from "express";
import { getAsteroidHandler, getAsteroidsHandler } from "../controllers/asteroids.controller";

const router = express.Router();

router.get("/", getAsteroidsHandler);
router.get("/:id", getAsteroidHandler);

export default router;
