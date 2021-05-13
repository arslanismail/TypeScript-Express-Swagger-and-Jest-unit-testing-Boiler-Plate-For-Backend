class ResponseError extends Error {
	status: number;
	type: string;
	constructor(message: any, type?: string, status?: number) {
		super(message);
		this.name = this.constructor.name;
		this.status = status ? status : 500;
		this.type = type ? type : 'null';
	}
}

export default ResponseError;
