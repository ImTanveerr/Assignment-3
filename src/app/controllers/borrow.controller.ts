import { Request, Response } from 'express';
import Book from '../models/book.model';
import Borrow from '../models/borrow.model';
import asyncHandler from 'express-async-handler';

export const createBorrow = asyncHandler(async (req: Request, res: Response) => {
  const { book: bookId, quantity, dueDate } = req.body;
  const book = await Book.findById(bookId);
  if (!book) throw new Error('Book not found');

  if (book.copies < quantity) throw new Error('Not enough copies available');

  book.copies -= quantity;
  book.updateAvailable();
  await book.save();

  const borrow = await Borrow.create({ book: book._id, quantity, dueDate });
  res.status(201).json({ success: true, message: 'Book borrowed', data: borrow });
});

export const getBorrowSummary = asyncHandler(async (req: Request, res: Response) => {
  const summary = await Borrow.aggregate([
    { $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } } },
    { $lookup: { from: "books", localField: "_id", foreignField: "_id", as: "book" } },
    { $unwind: "$book" },
    { $project: { totalQuantity: 1, "book.title": 1, "book.isbn": 1 } }
  ]);
  res.status(200).json({ success: true, data: summary });
});
