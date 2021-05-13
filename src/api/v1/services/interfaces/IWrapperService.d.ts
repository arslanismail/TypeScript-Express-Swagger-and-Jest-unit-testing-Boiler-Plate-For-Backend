export default interface IWrapperService {
	apiCall(
		requestType: any,
		url: any,
		headers: any,
		Body: any
	): any;
}
