import { Router } from 'express';

// Middlewares
import middlewares from './../config/middlewares';

import ApiV1Routes from './v1';

const router = Router();

// Middlewares configuration
middlewares.config(router);

router.use('/v1', ApiV1Routes);

export default router;
