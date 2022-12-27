import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
// eslint-disable-next-line import/extensions
import products from './models/Products';

dotenv.config();

console.log(process.env.DB);
const sequelize = new Sequelize(process.env.DB, process.env.MYSQL_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql',
});

// CREATE TABLE products (
//   id int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
//   title varchar(255),
//   price int,
//   description varchar(255),
//   quantity int
// );
// CREATE TABLE orders (
//   id int NOT NULL PRIMARY KEY  AUTO_INCREMENT ,
//   OrderNumber int NOT NULL,
//   customerName varchar(255),
//   productId int,
//   FOREIGN KEY (productId) REFERENCES products(id)
// );

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQL Connected ');
    // const db = {};
    // db.Sequelize = Sequelize;
    // db.sequelize = sequelize;

    // // db.products = products(sequelize, DataTypes);

    // // db.sequelize.sync({ force: false });
    // console.log('SQL Connected ');
    // return db;
  } catch (err) {
    console.error(err);
  }
};
connectDB();

export default sequelize;
