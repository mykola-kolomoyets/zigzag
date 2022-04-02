import AuthController from 'controllers/auth';
import { Router } from 'express';

import LangController from './../controllers/lang';

const router = Router();

router.route('/').post(LangController.switchLanguage);

export default router;