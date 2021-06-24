import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from '../errors/AppError';
import { UsersRepositores } from "../repositories/UsersRepositores";

export async function ensureAdmin (request: Request, response: Response, next: NextFunction) {
	const { user_id } = request;

	const usersRepository = getCustomRepository(UsersRepositores);
	const { admin } = await usersRepository.findOne(user_id);

	if (admin) {
		return next();
	}

	throw new AppError('unauthorized', 401);
}