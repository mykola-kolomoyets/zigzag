import { Router } from 'express';
import StatsController from '../controllers/stats';

const router = Router();

router.route('/').get(StatsController.get);
router.route('/update').post(StatsController.update).get(StatsController.get);

export default router;