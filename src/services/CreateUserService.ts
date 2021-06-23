import { getCustomRepository } from 'typeorm';
import { UsersRepositores } from "../repositories/UsersRepositores";


interface IUserRequest {
	name: string;
	email: string;
	password: string;
	admin?: boolean;
}

class CreateUserService {
	async execute ({ name, email, password, admin }: IUserRequest) {
		const usersRepository = getCustomRepository(UsersRepositores);

		if (!email) {
			throw new Error("e-mail cannot be empty");
		}

		const userAlreadyExists = await usersRepository.findOne({
			email
		});

		if (userAlreadyExists) {
			throw new Error("User already exists");
		}

		const user = usersRepository.create({
			name,
			email,
			admin,
			password
		});

		usersRepository.save(user);
		return user;
	}
}

export { CreateUserService };