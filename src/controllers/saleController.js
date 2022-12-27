import asyncHandler from '../utils/asyncHandler';
import {
  newSaleService,
  getAlSaleService,
  // updateProductService,
  // deleteProductService,
  countProductService,
  // stockProductService,
} from '../services/saleService';
import { NotFound } from '../utils/generalError';

export const addNewSale = asyncHandler(async (req, res) => {
  const result = await newSaleService(req.body);
  return res.status(201).json({ data: result, msg: 'Sale successfully' });
});

export const getAllSale = asyncHandler(async (req, res) => {
  const data = await getAlSaleService();
  return res.status(200).json({ data, msg: 'Sale fetch successfully' });
});

export const countSale = asyncHandler(async (req, res) => {
  const result = await countProductService();
  return res.status(200).json({ data: result, msg: 'Fetch successfully' });
});

// export const stockProduct = asyncHandler(async (req, res) => {
//   const result = await stockProductService();
//   return res.status(200).json({ data: result, msg: 'Fetch successfully' });
// });
