import * as express from 'express';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import 'dotenv/config';
import middleware from './config/middlewares/';
if (!fs.existsSync('.env')) {
	// Do something
	console.log(
		'.env File is not Present Make sure you are in Production Environment and have added All Required Envioronmental Variables'
	);
}

// API Routes
import { HealthRoute } from './api/v1/routes/';

import ApiDoc from './docs/api.docs';
import HealthService from './api/v1/services/health.service';

const app = express();

middleware.config(app);

const PORT = process.env.PORT || 3010;
const ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', ENV);

// const whitleListDomain = [
// 	`http://localhost:${PORT}`
// 	// 'http://alloweddomain.com'
// ];

ApiDoc();

//#region View Path registration
app.use(express.static(path.join(__dirname, './../public')));

app.get('/docs', (req: Request, res: Response, _next: NextFunction) => {
	res.sendFile(path.join(__dirname, './../public/index.html'));
});

//#endregion

app.use('/api/v1/', HealthRoute);

export default app;
