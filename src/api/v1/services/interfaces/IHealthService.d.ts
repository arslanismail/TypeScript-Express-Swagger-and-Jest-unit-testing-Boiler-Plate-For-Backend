export default interface IHealthService {
	heartbeat(): any;
	check(data: any): any;
	checkDb(): any;
}
