import { NextFunction, Request, Response } from "express";

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    message: err.message,
  });
}

export default errorHandler;
