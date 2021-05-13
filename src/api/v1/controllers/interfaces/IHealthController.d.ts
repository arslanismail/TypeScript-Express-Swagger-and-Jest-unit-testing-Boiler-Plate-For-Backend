import { Request, Response, NextFunction } from 'express';
export default interface IHealthController {
	check(req: Request, res: Response, next: NextFunction): any;
	heartbeat(req: Request, res: Response, next: NextFunction): any;
}
