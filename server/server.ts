import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';

import dotenv from 'dotenv';

import Path from './constants';
import connectDB from './db/connect';

// === routers
import authRouter from './routes/auth';
import statsRouter from './routes/stats';
import emailRouter from './routes/email';
import langRouter from './routes/lang';

// === middlewares
import notFoundMiddleware from './middleware/not-found';
import erorHandlerMiddleware from './middleware/error-handler';
import path from 'path';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome!');
});

// === routers
app.use(`${Path.main}${Path.auth.lang}`, langRouter);
app.use(`${Path.main}${Path.auth.main}`, authRouter);
app.use(`${Path.main}${Path.auth.email}`, emailRouter);
app.use(`${Path.main}${Path.stats.main}`, statsRouter);

// === middlewares
app.use(notFoundMiddleware);
app.use(erorHandlerMiddleware);

const PORT = process.env.PORT || 4000;

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get('*', (_, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html')),
//   (err) => res.status(500).send(err)
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch(error) {
    console.log(error);
  }
};

start();

