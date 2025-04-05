import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

import type { DataResponse } from './types';

import { errorHandler, notFound } from './middleware';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<unknown, DataResponse<string>>('/', (_req, res) => {
  res.json({ data: 'Hello' });
});

app.use(notFound);
app.use(errorHandler);

export default app;
