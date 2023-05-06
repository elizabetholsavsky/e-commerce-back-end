require('dotenv').config();

const Sequelize = require('sequelize');

// JawsDB, use for deployment to Heroku
// https://devcenter.heroku.com/articles/jawsdb#:~:text=JawsDB%20is%20a%20MySQL%2FMariaDB,for%20use%20with%20your%20application.

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
