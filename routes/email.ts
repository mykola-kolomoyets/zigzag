import { Router } from 'express';

import EmailController from './../controllers/email';

const router = Router();

router.route('/').post(EmailController.notifyByEmail);

export default router;