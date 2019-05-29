module.exports = {
  development: {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 5,
      max: 5,
      min: 1,
      idle: 20000,
    },
    database: process.env.DB_NAME || 'iofog-controller-dev',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  test: {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 5,
      max: 5,
      min: 1,
      idle: 20000,
    },
    database: process.env.DB_NAME || 'iofog-controller-test',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  production: {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 5,
      max: 5,
      min: 1,
      idle: 20000,
    },
    database: 'iofog-controller',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
}