require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import asteroidsRouter from "./routes/asteroids.route";
import notFoundHandler from "./middlewares/notFoundHandler";
import errorHandler from "./middlewares/errorHandler";

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/asteroids", asteroidsRouter);

app.get(
  "/api/healthChecker",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      status: "success",
      message: "Everything is OK",
    });
  }
);

app.all("*", notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
