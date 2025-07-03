"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorrowSummary = exports.createBorrow = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
const borrow_model_1 = __importDefault(require("../models/borrow.model"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.createBorrow = (0, express_async_handler_1.default)(async (req, res) => {
    const { book: bookId, quantity, dueDate } = req.body;
    const book = await book_model_1.default.findById(bookId);
    if (!book)
        throw new Error('Book not found');
    if (book.copies < quantity)
        throw new Error('Not enough copies available');
    book.copies -= quantity;
    book.updateAvailable();
    await book.save();
    const borrow = await borrow_model_1.default.create({ book: book._id, quantity, dueDate });
    res.status(201).json({ success: true, message: 'Book borrowed', data: borrow });
});
exports.getBorrowSummary = (0, express_async_handler_1.default)(async (req, res) => {
    const summary = await borrow_model_1.default.aggregate([
        { $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } } },
        { $lookup: { from: "books", localField: "_id", foreignField: "_id", as: "book" } },
        { $unwind: "$book" },
        { $project: { totalQuantity: 1, "book.title": 1, "book.isbn": 1 } }
    ]);
    res.status(200).json({ success: true, data: summary });
});
