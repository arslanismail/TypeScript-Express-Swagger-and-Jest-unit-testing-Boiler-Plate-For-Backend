import * as Joi from '@hapi/joi';
import Validate from '../../util/validator.helper';
import { Router } from 'express';

class HeaderMiddleware {
	static AUTHORIZE(): any {
		const schema: Joi.ObjectSchema<any> = Joi.object().keys({
			'x-access-token': Joi.string(),
			// 'content-type': Joi.string().valid('application/json').required(),
		});
		return Validate.headers(schema);
	}
}

const config = (router: Router): void => {
	router.use(HeaderMiddleware.AUTHORIZE());
};

export default { config };
