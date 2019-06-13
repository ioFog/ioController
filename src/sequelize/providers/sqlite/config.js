module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'dev_database.sqlite',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 1,
      max: 1,
      min: 0,
      idle: 20000,
    },
  },
  test: {
    dialect: 'sqlite',
    storage: 'test_database.sqlite',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 1,
      max: 1,
      min: 0,
      idle: 20000,
    },
  },
  production: {
    dialect: 'sqlite',
    storage: 'prod_database.sqlite',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 1,
      max: 1,
      min: 0,
      idle: 20000,
    },
  },
}
