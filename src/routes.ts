import { Router } from 'express';
import { CreateUserController } from './controllers/createUserController';
import { CreateTagController } from './controllers/createTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/authenticateUserController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users/create", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/tags/create", ensureAdmin, createTagController.handle);

export { router };