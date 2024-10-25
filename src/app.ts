import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
const allowedOrigin=['https://incredible-sunshine-b6f9ea.netlify.app',"*"]
app.use(cors({origin:(origin: string | undefined,callback)=>{
  if(!origin||allowedOrigin.includes(origin)){
    callback(null,true);
  }else{
    callback(new Error('Not allowed by CORS'),false);
  }
}}));

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('welcome to florist api!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;
