import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import configureAllRoutes from './routes/index';
import { handleError } from './middlewares/index';
// config environment variable
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// all routes connect
configureAllRoutes(app);
app.all('*', (req, res) => res.status(404).json({ success: false, msg: 'Route not found' }));
app.use(handleError);
export default app;
