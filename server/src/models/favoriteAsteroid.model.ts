import { Schema, model } from "mongoose";

const asteroidsFavoriteSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
});

export const AsteroidsFavoriteModel = model(
  "AsteroidsFavorite",
  asteroidsFavoriteSchema
);
