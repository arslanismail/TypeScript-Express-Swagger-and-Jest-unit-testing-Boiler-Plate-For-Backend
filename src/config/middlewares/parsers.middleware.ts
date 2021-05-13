import { Router } from 'express';
import * as bodyParser from 'body-parser';

const config = (router: Router): any => {
	router.use(bodyParser.json({ limit: '50mb' }));
	router.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
};

export default { config };
