import express from 'express';
import {
  addNewProduct,
  getAllProduct,
} from '../controllers/productController';
// import { handleValidations } from '../middlewares/handleValidation';
// import validation from '../models/validation/index';
// import accessControl from '../middlewares/accessControl';

const router = express.Router();

router.route('/').post(addNewProduct).get(getAllProduct);
// router.route('/:number').get(accessControl, getUser);
// router.route('/:id').put(updateUser).delete(deleteUser);

const configure = (app) => {
  app.use('/api/product', router);
};

export default configure;
