import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from '@hapi/joi';

function validate(
	req: Request,
	res: Response,
	next: NextFunction,
	body: any,
	schemas: ObjectSchema<any>,
	options: any = undefined
): void {
	const extra = options || { abortEarly: false, stripUnknown: true };
	const { error } = schemas.validate(body, extra);
	if (!error) {
		next();
	} else {
		res.send(validationFailedMessage(error.details, error.message));

		// const details = error.details;
		// const message = details?.map((err: any) => {
		// 	err.path.push(err.type.split('.').pop());
		// 	const type = err.path
		// 		.join('_')
		// 		// .replace(/([A-Z])/g, "_$1")
		// 		.toUpperCase()
		// 		.replace('-', '_');
		// 	res.send(validationErrorObject(err.message));
		// });
		// throw message;
	}
}

const ValidatorHelper = {
	headers: (schemas: ObjectSchema<any>): any => (
		req: Request,
		res: Response,
		next: NextFunction
	): any => validate(req, res, next, req.headers, schemas),
	params: (schemas: ObjectSchema<any>): any => (
		req: Request,
		res: Response,
		next: NextFunction
	): any => validate(req, res, next, req.params, schemas),
	body: (schemas: ObjectSchema<any>): any => (
		req: Request,
		res: Response,
		next: NextFunction
	): any => validate(req, res, next, req.body, schemas),
	query: (schemas: ObjectSchema<any>): any => (
		req: Request,
		res: Response,
		next: NextFunction
	): any => validate(req, res, next, req.query, schemas),
	validate: (body: any, schemas: ObjectSchema<any>): any => (
		req: Request,
		res: Response,
		next: NextFunction
	): any => validate(req, res, next, body, schemas),
};

const validationFailedMessage = (error: any, message: any) => {
	return { status: 400, data: null, message: message };
};

export default ValidatorHelper;
