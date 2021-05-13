import * as fs from 'fs';
import * as path from 'path';
import * as swaggerJSDoc from 'swagger-jsdoc';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version, description } = require('./../../package.json');

function getDefination(): any {
	return {
		openapi: '3.0.0',
		info: {
			title: 'boilerplate.wrapper',
			version: version,
			description: description,
			'x-logo': {
				url: 'http://arslanismail.com/images/arslan1.png',
				altText: 'boilerplate.wrapper',
			},
			contact: {
				name: 'Arslan Ismail ',
				url: 'http://arslanismail.com/',
				email: 'arslanismail840@gmail.com',
			},
			host: 'http://localhost:3000',
			basePath: '/api/v1',
		},
		securityDefinitions: {
			Authorization: {
				type: 'apiKey',
				in: 'header',
				name: 'Authorization',
			},
		},
		schemes: ['http', 'https'],
		consumes: ['application/json'],
		produces: ['application/json'],
		components: {},
	};
}
function fileContent(): string {
	const docsDefination = getDefination();
	const content = swaggerJSDoc({
		swaggerDefinition: docsDefination,
		apis: [path.join(process.cwd(), './docs/*.yaml')],
	});
	return JSON.stringify(content, null, 2);
}

export default (): void => {
	fs.writeFileSync(
		path.join(__dirname, '../../public/api.docs.json'),
		fileContent()
	);
};
