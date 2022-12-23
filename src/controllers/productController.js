import asyncHandler from '../utils/asyncHandler';
import {
  addNewProductService,
  getAlProductService,
} from '../services/productService';
import { NotFound } from '../utils/generalError';

export const addNewProduct = asyncHandler(async (req, res) => {
  const result = await addNewProductService(req.body);
  return res.status(201).json({ data: result, msg: 'Product create successfully' });
});

export const getAllProduct = asyncHandler(async (req, res) => {
  const user = await getAlProductService();
  return res.status(200).json({ user, msg: 'Product fetch successfully' });
});

// export const updateUser = asyncHandler(async (req, res) => {
//   const user = checkTempUserService(req.params.id);
//   if (!user || user.tempDeleted === true) {
//     throw new NotFound('User not found');
//   }
//   const updatedUser = await updateUserService(req.params.id, req.body);
//   return res.status(200).json({ updatedUser, msg: `${updateUser.role} update successfully` });
// });

// export const deleteUser = asyncHandler(async (req, res) => {
//   const user = await checkTempUserService(req.params.id);
//   if (!user) {
//     throw new NotFound(`User not found in this id:${req.params.id}`);
//   }
//   if (user && user.tempDeleted === true) {
//     throw new NotFound('You have already deleted');
//   }
//   const deletedUser = await deleteUserService(req.params.id);
//   return res.status(200).json({ deletedUser, msg: `${deleteUser.role} delete successfully` });
// });
