// import { Sequelize, DataTypes } from 'sequelize';

const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    // published: {
    //   type: DataTypes.BOOLEAN,
    // },

  });

  return Product;
};
export default ProductModel;
