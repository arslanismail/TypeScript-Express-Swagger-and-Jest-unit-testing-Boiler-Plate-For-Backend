import { Router } from 'express';
import parsers from './parsers.middleware';
import custom from './custom.middleware';
import headers from './header.middleware';

const config = (router: Router): void => {
	parsers.config(router);
	custom.config(router);
	headers.config(router);
};

export default { config };
