import Knex, * as knex from 'knex';
import * as dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
	throw result.error;
}

class DbBaseClass {
	DEFAULT_PORT: number = 1433;
	DATABASE_DIALECT = process.env.DB_DIALECT
		? process.env.DB_DIALECT
		: this.exceptionCatcher('DB_DIALECT Is Missing from env');
	connection = {
		host: process.env.DB_HOST
			? process.env.DB_HOST
			: this.exceptionCatcher('DB_HOST Is Missing from env'),
		user: process.env.DB_USER
			? process.env.DB_USER
			: this.exceptionCatcher('DB_USER Is Missing from env'),
		password: process.env.DB_PASSWORD
			? process.env.DB_PASSWORD
			: this.exceptionCatcher('DB_PASSWORD Is Missing from env'),
		database: process.env.DB_NAME
			? process.env.DB_NAME
			: this.exceptionCatcher('DB_NAME is missing from env'),
		port: this.setPort(),
	};
	exceptionCatcher(error: string) {
		throw Error(error ? error : 'Unkown Error Occured In Base Db Calls');
		return error;
	}
	setPort(): number {
		try {
			const port = process.env.DB_PORT
				? parseInt(process.env.DB_PORT)
				: this.DEFAULT_PORT;
			return port;
		} catch (err) {
			return this.DEFAULT_PORT;
		}
	}
}

export default DbBaseClass;
