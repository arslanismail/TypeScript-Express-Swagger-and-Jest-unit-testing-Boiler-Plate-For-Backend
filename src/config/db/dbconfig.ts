import * as Knex from 'knex';
import DBBaseClass from './dbBaseClass';
import {
	DATABASE_MIGRATION_TABLE_NAME,
	DATABASE_MIGRATION_DIRECTORY,
	DATABASE_SEED_DIRECTORY,
} from './constants';

export class DBConfigurationService extends DBBaseClass {
	constructor() {
		super();
	}

	databaseConfig(): Knex.Config {
		return {
			connection: this.connectionConfig,
			client: this.DATABASE_DIALECT,
			migrations: this.migratorConfig,
			seeds: this.seedsConfig,
			pool: this.poolConfig,
			useNullAsDefault: true,
			debug: false,
		};
	}
	get migratorConfig(): Knex.MigratorConfig {
		return {
			tableName: DATABASE_MIGRATION_TABLE_NAME,
			directory: DATABASE_MIGRATION_DIRECTORY,
		};
	}
	private get poolConfig(): Knex.PoolConfig {
		return {
			min: 2,
			max: 10,
		};
	}
	private get seedsConfig(): Knex.SeedsConfig {
		return {
			directory: DATABASE_SEED_DIRECTORY,
		};
	}
	get connectionConfig(): Knex.StaticConnectionConfig {
		switch (this.DATABASE_DIALECT) {
			case 'mssql':
				return this.MSSQL;
			case 'pg':
				return this.PG;
			default:
				throw new Error(
					`Database type '${this.DATABASE_DIALECT}' not supported`
				);
		}
	}
	private get MSSQL(): Knex.MsSqlConnectionConfig {
		return {
			user: this.connection.user,
			password: this.connection.password,
			server: this.connection.host,
			port: this.connection.port,
			database: this.connection.database,
		};
	}

	private get PG(): Knex.PgConnectionConfig {
		return {
			user: this.connection.user,
			password: this.connection.password,
			host: this.connection.host,
			port: this.connection.port,
			database: this.connection.database,
		};
	}
}
