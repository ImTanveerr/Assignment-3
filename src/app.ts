import express from 'express';
import cors from 'cors';
import bookRoutes from './app/routes/book.routes';
import borrowRoutes from './app/routes/borrow.routes';

const app = express();


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5174', 'https://frontend-three-neon-81.vercel.app'],
}));

app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);

export default app;
