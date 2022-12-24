import asyncHandler from '../utils/asyncHandler';
import {
  addNewProductService,
  getAlProductService,
  updateProductService,
  deleteProductService,
  countProductService,
  stockProductService,
} from '../services/productService';
import { NotFound } from '../utils/generalError';

export const addNewProduct = asyncHandler(async (req, res) => {
  const result = await addNewProductService(req.body);
  return res.status(201).json({ data: result, msg: 'Product create successfully' });
});

export const getAllProduct = asyncHandler(async (req, res) => {
  const data = await getAlProductService();
  return res.status(200).json({ data, msg: 'Product fetch successfully' });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const result = await updateProductService(req.params.id, req.body);
  return res.status(200).json({ data: result, msg: 'update successfully' });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const result = await deleteProductService(req.params.id);
  return res.status(200).json({ data: result, msg: 'Delete successfully' });
});

export const countProduct = asyncHandler(async (req, res) => {
  const result = await countProductService();
  return res.status(200).json({ data: result, msg: 'Fetch successfully' });
});

export const stockProduct = asyncHandler(async (req, res) => {
  const result = await stockProductService();
  return res.status(200).json({ data: result, msg: 'Fetch successfully' });
});
