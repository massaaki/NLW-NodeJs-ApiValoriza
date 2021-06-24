import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface IPayload {
	sub: string;
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {

	//Receber token
	const authToken = request.headers.authorization;

	//Validar token está preenchido
	if (!authToken)
		throw new AppError('token missing', 401);

	//Validar se eh valido
	const [, token] = authToken.split(' ');
	try {
		const { sub } = verify(token, '5eb63bbbe01eeed093cb22bb8f5acdc3') as IPayload;
		request.user_id = sub;
		return next();
	} catch (err) {
		throw new AppError('not authorized', 401);
	}

	//Recuperar informacoes do usuario
}