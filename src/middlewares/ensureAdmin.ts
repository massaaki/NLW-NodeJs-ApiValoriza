import { NextFunction, Request, Response } from "express";
import { AppError } from '../errors/AppError';

export function ensureAdmin (request: Request, response: Response, next: NextFunction) {
	const admin = true; //temp

	if (admin) {
		return next();
	}

	throw new AppError('unauthorized', 401);
}