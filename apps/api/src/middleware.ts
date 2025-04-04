import type { NextFunction, Request, Response } from 'express';

import type { ErrorResponse } from './types';

import { IS_PROD } from './config/constants';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`not found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(err: Error, _req: Request, res: Response<ErrorResponse>, _next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({ message: err.message, stack: IS_PROD ? undefined : err.stack });
}
