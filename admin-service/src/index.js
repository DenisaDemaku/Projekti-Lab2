import express from 'express';
import { routes } from './routes';
import { CorsMiddleware } from './middleware/Cors.middleware';

export const app = new express();

app.use(express.json());

app.use(CorsMiddleware);

routes(app);
