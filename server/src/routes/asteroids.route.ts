import express from "express";
import { getAsteroidsHandler } from "../controllers/asteroids.controller";

const router = express.Router();

router.get("/", getAsteroidsHandler);

export default router;
