// import { Sequelize, DataTypes } from 'sequelize';

const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },

    // published: {
    //   type: DataTypes.BOOLEAN,
    // },

  });

  return Product;
};
export default ProductModel;
