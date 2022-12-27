import { QueryTypes } from 'sequelize';
import sequelize from '../connectDB';

export const newSaleService = async (data) => {
  console.log(data);
  const results = await sequelize.query(
    `INSERT INTO orders (invoice_number, customer_name, total_price)
    VALUES ('${data.invoice_number}', '${data.customer_name}','${data.total_price}');`,
    {
      type: QueryTypes.INSERT,
    },
  );
  return results;
};
export const createOrderDetailsService = async (data) => {
  const results = await sequelize.query(
    `INSERT INTO order_details (orderId, productId, title, quantity,  price)
    VALUES ('${data.orderId}', '${data.productId}','${data.title}', '${data.quantity}', '${data.price}');`,
    {
      type: QueryTypes.INSERT,
    },
  );
  return results;
};

export const getAlSaleService = async () => {
  const results = await sequelize.query(
    'SELECT * FROM orders',
    {
      type: QueryTypes.SELECT,
    },
  );
  return results;
};
export const getOrderDetailsService = async (orderId) => {
  const results = await sequelize.query(
    `SELECT * FROM order_details WHERE orderId = '${orderId}'`,
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
