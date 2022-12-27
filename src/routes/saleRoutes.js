import express from 'express';
import {
  addNewSale,
  getAllSale,
  countSale,
  // deleteProduct,
  // countProduct,
  // stockProduct,
} from '../controllers/saleController';

const router = express.Router();

router.route('/').post(addNewSale).get(getAllSale);
router.route('/count').get(countSale);
// router.route('/stock').get(stockProduct);

const configure = (app) => {
  app.use('/api/sale', router);
};

export default configure;
