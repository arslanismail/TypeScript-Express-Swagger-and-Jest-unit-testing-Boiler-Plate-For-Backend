import { DBConfigurationService } from './src/config/db/dbconfig';
const dbConfig: DBConfigurationService = new DBConfigurationService();
module.exports = {
	development: { ...dbConfig.databaseConfig() },
	production: { ...dbConfig.databaseConfig() },
	test: { ...dbConfig.databaseConfig() },
};
