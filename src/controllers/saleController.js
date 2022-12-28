import generateUniqueId from 'generate-unique-id';
import asyncHandler from '../utils/asyncHandler';
import {
  newSaleService,
  createOrderDetailsService,
  getAlSaleService,
  getOrderDetailsService,
  saleCountService,
  saleAmountService
  // stockProductService,
} from '../services/saleService';
import { NotFound } from '../utils/generalError';

console.log(generateUniqueId({
  length: 7,
  useLetters: false,
}));

export const addNewSale = asyncHandler(async (req, res) => {
  const { customer_name, products } = req.body;
  const invoice_number = generateUniqueId({ length: 7, useLetters: false });
  const total_price = products.reduce((accumulator, currentValue) => ((currentValue.price * currentValue.quantity) + accumulator), 0);
  const result = await newSaleService({ invoice_number, customer_name, total_price });
  const orderId = result[0];
  products.map((item) => { createOrderDetailsService({ orderId, productId: item.id, title: item.title, quantity: item.quantity, price: item.price });
  });

  return res.status(201).json({ data: result[0], msg: 'Sale successfully' });
});

export const getAllSale = asyncHandler(async (req, res) => {
  const data = await getAlSaleService();
  return res.status(200).json({ data, msg: 'Sale fetch successfully' });
});
export const getOrderDetails = asyncHandler(async (req, res) => {
  const data = await getOrderDetailsService(req.params.id);
  return res.status(200).json({ data, msg: 'Order Details fetch successfully' });
});
// console.log(totalAmount);
export const saleCount = asyncHandler(async (req, res) => {
  const result = await saleCountService();
  return res.status(200).json({ data: result, msg: 'Fetch successfully' });
});

export const saleAmount = asyncHandler(async (req, res) => {
  const result = await saleAmountService();
  return res.status(200).json({ data: result, msg: 'Fetch successfully' });
});

// export const stockProduct = asyncHandler(async (req, res) => {
//   const result = await stockProductService();
//   return res.status(200).json({ data: result, msg: 'Fetch successfully' });
// });
