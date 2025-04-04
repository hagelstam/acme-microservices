import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import helmet from 'helmet';
import morgan from 'morgan';

import type { UserResponse } from './types';

import * as middleware from './middleware';

dotenv.config();

const app = express();

app.use(
  OpenApiValidator.middleware({
    apiSpec: '../openapi/api.yaml',
    validateRequests: true,
  }),
);

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<unknown, UserResponse>('/', (_req, res) => {
  res.json({ users: ['james'] });
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
