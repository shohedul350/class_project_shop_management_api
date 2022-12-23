import { Sequelize, DataTypes, QueryTypes } from 'sequelize';
// import sequelize from 'sequelize';
// import db from '../connectDB';
// const { db } = Sequelize;

// console.log(db);

const sequelize = new Sequelize('test', 'emon', 'emon', {
  host: 'localhost',
  dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
const db = {};
const connectDB = async () => {
  try {
    await sequelize.authenticate();
   
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    // db.products = products(sequelize, DataTypes);

    db.sequelize.sync({ force: false });
    console.log('SQL Connected ');
  } catch (err) {
    console.error(err);
  }
};

connectDB()


export const addNewProductService = async () => {
  // const results = await db.query(
  //   'SELECT * FROM product',
  //   {
  //     type: QueryTypes.SELECT,
  //   },
  // );
  return null;
};

export const getAlProductService = async () => {
  console.log(db.sequelize);
  // const d = db();
  // console.log(d);
  const results = await db.sequelize.query(
    'SELECT * FROM products',
    {
      type: QueryTypes.SELECT,
    },
  );
  console.log(results);
  return results;
};

// export const updateUserService = async (id, data) => {
//   // const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
//   return null;
// };

// export const deleteUserService = async (id) => {
//   // const deletedUser = await User.findByIdAndUpdate(id, { tempDeleted: true }, { new: true });
//   return null;
// };

// export const checkTempUserService = async (id) => {
//   // const checkTemp = await User.findById(id);
//   return null;
// };
