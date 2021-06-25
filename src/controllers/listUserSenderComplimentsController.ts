import { Request, Response } from 'express';
import { ListUserSenderCompomentsService } from '../services/ListUserSenderComplimentsService';

class ListUserSenderComplimentsController {
	async handle (request: Request, response: Response) {
		const { user_id } = request;
		const listUserSenderComplimentsService = new ListUserSenderCompomentsService();
		const compliments = await listUserSenderComplimentsService.execute(user_id);

		return response.json(compliments);
	}
}

export { ListUserSenderComplimentsController };