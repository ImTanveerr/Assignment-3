import express, { Request, Response } from 'express';
// ...existing code...
import Book from '../models/book.model';
import asyncHandler from 'express-async-handler';



export const createBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.create(req.body);
  res.status(201).json({ success: true, message: 'Book created', data: book });
});

export const getBooks = asyncHandler(async (req: Request, res: Response) => {
  const books = await Book.find();
  res.status(200).json({ success: true, data: books });
});

export const getBookById = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.bookId);
  res.status(200).json({ success: true, data: book });
});

export const updateBook = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
  res.status(200).json({ success: true, data: book });
});

export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.bookId);
  res.status(204).json({ success: true, data: null });
});
