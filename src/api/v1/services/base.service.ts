class BaseService {
	constructor() { }

	sendResponse(data: any, message?: any, status?: any): any {


		// This Case Activates in case of some other Service is down or broken
		if (!data) {
			return {
				status: 500,
				data: null,
				error:
					'Contact Support with screenshot of this error Err:900',
				message: 'Server Error',
			};
		}
		// Exception Caught From This Service
		if (data.type && data.name) {
			return { data: null, message: data.type, status: data.status };
		}

		//  This case handles Response from Other Service
		if (data.status && data.message) {
			if (data.status != 200 && data.status != 500 && data.status != 401 && !data.data.token) {
				if (data.data?.msg) {
					data.message = data.data.msg;
					data.data = data.token ? { token: data.token } : null;
					return data;
				}
				data.message = data.data;
				data.data = null;
				return data;
			}
			if (data.status == 401) {
				data.data = null;
			}
			if (data.status == 400 && data.data.token) {
				data.message = data.data.msg ? data.data.msg : data.message;
				delete data.data.msg;
				return data;
			}
			if (data.status == 200 && data.data.token) {
				console.log(data);
				data.message = data.data.data ? data.data.data : data.mesasge;
				delete data.data.data;
				return data;
			}
			return data;
		}
		//  This case handles Error Caught From Other Service Exception
		if (data.response && data.response.statusText && data.response.data) {
			return {
				status: data.response.status,
				data: data.response.data,
				message: data.response.statusText,
			};
		}
		// The Following are the Response Set For This Service Apis
		if (message) {
			const { type } = data;
			const statusCode = status ? status : 500;
			return { status: statusCode, data: null, error: type, message: message };
		} else {
			return { status: 200, data: data, message: 'Request Successfull' };
		}
	}

	commonErrorResponse(error: any): any {
		const errorMessage = error.message
			? error.message
			: 'Contact Support with screenshot of this error Err:901';

		const statusCode = error.status ? error.status : 500;
		return this.sendResponse(error, errorMessage, statusCode);
	}

	j1ResponseWrapper(j1Result: any): any {
		if (j1Result.data) {
			return this.sendResponse(j1Result);
		} else {
			return this.commonErrorResponse(j1Result);
		}
	}
}

export default BaseService;
