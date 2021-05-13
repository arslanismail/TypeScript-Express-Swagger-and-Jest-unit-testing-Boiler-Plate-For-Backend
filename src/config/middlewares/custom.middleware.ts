import { Router, Request, Response, NextFunction } from 'express';
export default {
	config: (router: Router): void => {
		// Set user in response to use in next middlewares.
		router.use((req: Request, res: Response, next: NextFunction) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, x-tenant-id, Cache-Control, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Methods, Access-Control-Allow-Origin, x-access-token'
			);
			// TODO: Verify user from Database and Set in the res.locals object to make it available in the next middlewares.
			// res.locals.user = req.user;
			next();
		});
	},
};
