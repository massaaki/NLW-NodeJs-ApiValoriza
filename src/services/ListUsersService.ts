import { getCustomRepository } from 'typeorm';
import { UsersRepositores } from '../repositories/UsersRepositores';

class ListUsersService {
	async execute () {
		const usersRepository = getCustomRepository(UsersRepositores);
		const users = await usersRepository.find();

		return users;
	}
}

export { ListUsersService };