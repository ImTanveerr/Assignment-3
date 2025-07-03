import express from 'express';
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/book.controller';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:bookId', getBookById);
router.patch('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

export default router;
