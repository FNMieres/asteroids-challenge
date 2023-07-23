import { NextFunction, Request, Response } from "express";

function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
}

export default notFoundHandler;
