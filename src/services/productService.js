import { QueryTypes } from 'sequelize';
import sequelize from '../connectDB';

export const addNewProductService = async (data) => {
  const results = await sequelize.query(
    `INSERT INTO products (title, price, description, quantity)
    VALUES ('${data.title}', '${data.price}','${data.description}','${data.quantity}');`,
    {
      type: QueryTypes.INSERT,
    },
  );
  return results;
};

export const getAlProductService = async () => {
  const results = await sequelize.query(
    'SELECT * FROM products',
    {
      type: QueryTypes.SELECT,
    },
  );
  return results;
};

export const deleteProductService = async (id) => {
  const results = await sequelize.query(
    `DELETE FROM products WHERE id=${id};`,
    {
      type: QueryTypes.DELETE,
    },
  );
  return results;
};

export const updateProductService = async (id, data) => {
  const results = await sequelize.query(
    `UPDATE products
    SET title = '${data.title}', price = ${data.price}, description = '${data.description}', quantity = ${data.quantity} WHERE id=${id};`,
    {
      type: QueryTypes.UPDATE,
    },
  );
  return results;
};

export const countProductService = async () => {
  const results = await sequelize.query(
    'SELECT COUNT(id) AS count FROM products;',
    {
      type: QueryTypes.SELECT,
    },
  );
  return results;
};

export const stockProductService = async () => {
  const results = await sequelize.query(
    'SELECT SUM(quantity) AS count FROM products;',
    {
      type: QueryTypes.SELECT,
    },
  );
  return results;
};
