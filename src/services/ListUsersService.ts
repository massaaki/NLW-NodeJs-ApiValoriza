import { getCustomRepository } from 'typeorm';
import { UsersRepositores } from '../repositories/UsersRepositores';
import { classToPlain } from 'class-transformer';
class ListUsersService {
	async execute () {
		const usersRepository = getCustomRepository(UsersRepositores);
		const users = await usersRepository.find();

		return classToPlain(users);
	}
}

export { ListUsersService };