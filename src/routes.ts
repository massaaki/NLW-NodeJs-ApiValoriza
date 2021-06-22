import { Router } from 'express';
import { CreateUserController } from './controllers/createUserController';

const router = Router();

const createUserController = new CreateUserController();

router.post("/users/create", createUserController.handle)

export { router };