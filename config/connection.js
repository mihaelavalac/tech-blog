//This file have the purpose to connect to the database using Sequelize.

// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
//to access the .env file and grab the info for db connection. 
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, 
//configuration settings
{
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;