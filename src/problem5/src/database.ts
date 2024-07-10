import * as dotenv from "dotenv";
import { Sequelize } from 'sequelize-typescript';
import { Resource } from './models/Resource';

dotenv.config()

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: 'postgres',
  models: [Resource],
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message || error.stack);
  });

export default sequelize;
