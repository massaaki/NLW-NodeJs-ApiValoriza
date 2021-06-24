import { Router } from 'express';
import { CreateUserController } from './controllers/createUserController';
import { CreateTagController } from './controllers/createTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/authenticateUserController';
import { CreateComplimentController } from './controllers/createComplimentController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users/create", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/tags/create", ensureAdmin, createTagController.handle);
router.post("/compliment/create", ensureAdmin, createComplimentController.handle);

export { router };