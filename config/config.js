require('dotenv').config()

const development = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT
}

const test = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT
}

const production = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT
}

module.exports = { development, test, production }

