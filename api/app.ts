import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './src/config/corsConfig';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 4000;

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.all('*', (req, res, next) => {
  res.status(404).send('404');
});

app.listen(PORT, () => {
  console.log(`server opened at ${PORT}`);
});
