import { getCustomRepository } from "typeorm"
import { AppError } from "../errors/AppError";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositores } from "../repositories/UsersRepositores";



interface IComplimentRequest {
	tag_id: string;
	user_sender: string;
	user_receiver: string;
	message: string;
}

class CreateComplimentService {
	async execute ({ user_sender, user_receiver, tag_id, message }: IComplimentRequest) {
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
		const usersRepositores = getCustomRepository(UsersRepositores);

		if (user_sender === user_receiver)
			throw new AppError("Incorrect user receiver");

		const userReceiverExists = await usersRepositores.findOne(user_receiver);

		if (!userReceiverExists)
			throw new AppError("User receiver does not exists");

		const compliment = complimentsRepositories.create({
			tag_id, user_sender, user_receiver, message
		});
		await complimentsRepositories.save(compliment);

		return compliment;
	}
}

export { CreateComplimentService }