import Knex, * as knex from 'knex';
import { DBConfigurationService } from './dbconfig';
const dbConfig: DBConfigurationService = new DBConfigurationService();
const db: Knex = knex(dbConfig.databaseConfig());

export default db;
