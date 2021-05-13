export default interface ICommonResponse {
	status: number;
	data: object;
	message: string;
	error?: string | object;
}
