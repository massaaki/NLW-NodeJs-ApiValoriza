import { Router } from 'express';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { CreateUserController } from './controllers/createUserController';
import { CreateTagController } from './controllers/createTagController';
import { AuthenticateUserController } from './controllers/authenticateUserController';
import { CreateComplimentController } from './controllers/createComplimentController';
import { ListUserReceiverComplimentsController } from './controllers/listUserReceiverComplimentsController';
import { ListUserSenderComplimentsController } from './controllers/listUserSenderComplimentsController';
import { ListTagsController } from './controllers/listTagsController';
import { ListUsersController } from './controllers/listUsersController';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users/create", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/tags/create", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliment/create", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliment/send", ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get("/users/compliment/receive", ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/tags", listTagsController.handle);
router.get("/users", listUsersController.handle);

export { router };