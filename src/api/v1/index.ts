import { Router } from 'express';

import HealthRoute from './routes/health.route';

const router = Router();

router.use('/health', HealthRoute);

export default router;
