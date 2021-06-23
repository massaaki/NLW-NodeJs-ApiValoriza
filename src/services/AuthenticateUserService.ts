import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersRepositores } from "../repositories/UsersRepositores";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
interface IAuthenticateRequest {
	email: string;
	password: string;
}

class AuthenticateUserService {
	async execute ({ email, password }: IAuthenticateRequest) {
		const usersRepositories = getCustomRepository(UsersRepositores);

		const user = await usersRepositories.findOne({ email });

		if (!user)
			throw new AppError('Email/Password incorrect', 401);

		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch)
			throw new AppError('Email/Password incorrect', 401);

		const token = sign({
			email: user.email
		}, '5eb63bbbe01eeed093cb22bb8f5acdc3', {
			subject: user.id,
			expiresIn: "1d"
		});

		return token;
	}
}

export { AuthenticateUserService };