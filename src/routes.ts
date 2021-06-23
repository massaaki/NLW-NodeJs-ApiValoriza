import { Router } from 'express';
import { CreateUserController } from './controllers/createUserController';
import { CreateTagController } from './controllers/createTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users/create", createUserController.handle);
router.post("/tags/create", ensureAdmin, createTagController.handle);

export { router };