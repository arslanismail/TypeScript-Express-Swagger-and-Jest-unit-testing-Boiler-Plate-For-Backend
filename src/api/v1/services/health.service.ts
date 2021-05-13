import IHealthService from './interfaces/IHealthService';
import DB from '../../../config/db/index';
import ResponseError from './../../../util/ResonseError';

class HealthService implements IHealthService {
	DB: any;
	constructor() {
		this.DB = DB;
	}
	async heartbeat(): Promise<any> {
		const result = { status: 200, data: 'Server is running.' };
		return result;
	}
	async check(data: any): Promise<any> {
		return data;
	}
	async checkDb(): Promise<any> {
		try {
			const [connection] = await this.DB.raw('select 1+1 as result');
			if (connection.result)
				return {
					status: 200,
					message: 'Database is connected Successfully',
					error: null,
				};
		} catch (err) {
			return {
				status: 500,
				message: 'DB_CONNECTION_ERROR',
				error: err.message,
			};
			throw new ResponseError(err.message, 'DB_CONNECTION_ERROR', 500);
		}
	}
}

export default HealthService;
