import express from 'express';
import {
  addNewProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  countProduct,
  stockProduct,
} from '../controllers/productController';

const router = express.Router();

router.route('/').post(addNewProduct).get(getAllProduct);
router.route('/count').get(countProduct);
router.route('/stock').get(stockProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);

const configure = (app) => {
  app.use('/api/product', router);
};

export default configure;
