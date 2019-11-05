require('dotenv').config();

module.exports = {
  development: {
    logging: (process.env.NODE_ENV !== 'development' ? console.log : null),
    dialect: 'postgres',
    migrationStorageTableName: 'migration_meta',
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME,
    username: process.env.DB_USER || 'postgres',
    port: '5432',
  },
  production: {
    logging: (process.env.NODE_ENV !== 'production' ? console.log : null),
    dialect: 'postgres',
    migrationStorageTableName: 'migration_meta',
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    port: '5432',
  },
};

