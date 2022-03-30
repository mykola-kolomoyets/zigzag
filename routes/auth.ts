import { Router } from 'express';
import AuthController from '../controllers/auth';

import path from './../constants';

const router = Router();

router.route('/').get(AuthController.getUser);
router.route(path.auth.register).post(AuthController.register);
router.route(path.auth.login).post(AuthController.login);
router.route(path.auth.update).patch(AuthController.update);

export default router;