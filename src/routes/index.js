import productRoutesConfigure from './productRoutes';
import saleRoutesConfigure from './saleRoutes';

const configureAllRoutes = (app) => {
  productRoutesConfigure(app);
  saleRoutesConfigure(app);
};

export default configureAllRoutes;
