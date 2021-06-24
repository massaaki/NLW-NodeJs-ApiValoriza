import { Router } from 'express';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { CreateUserController } from './controllers/createUserController';
import { CreateTagController } from './controllers/createTagController';
import { AuthenticateUserController } from './controllers/authenticateUserController';
import { CreateComplimentController } from './controllers/createComplimentController';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users/create", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/tags/create", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliment/create", ensureAuthenticated, createComplimentController.handle);

export { router };