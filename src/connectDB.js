import { Sequelize, DataTypes } from 'sequelize';
// eslint-disable-next-line import/extensions
import products from './models/Products';

const dbConfig = {
  HOST: 'localhost',
  USER: 'emon',
  PASSWORD: 'emon',
  DB: 'test',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
// const sequelize = new Sequelize(
//   dbConfig.DB,
//   dbConfig.USER,
//   dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,

//     pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle,

//     },
//   },
// );
const sequelize = new Sequelize('test', 'emon', 'emon', {
  host: 'localhost',
  dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    // const db = {};
    // db.Sequelize = Sequelize;
    // db.sequelize = sequelize;

    // db.products = products(sequelize, DataTypes);

    // db.sequelize.sync({ force: false });
    console.log('SQL Connected ');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
