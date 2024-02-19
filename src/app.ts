import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('hi hi api run hoy!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;
