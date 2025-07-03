import express from 'express';
import cors from 'cors';
import bookRoutes from './app/routes/book.routes';
import borrowRoutes from './app/routes/borrow.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);

export default app;
