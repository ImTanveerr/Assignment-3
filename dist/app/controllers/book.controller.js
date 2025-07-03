"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getBooks = exports.createBook = void 0;
// ...existing code...
const book_model_1 = __importDefault(require("../models/book.model"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.createBook = (0, express_async_handler_1.default)(async (req, res) => {
    const book = await book_model_1.default.create(req.body);
    res.status(201).json({ success: true, message: 'Book created', data: book });
});
exports.getBooks = (0, express_async_handler_1.default)(async (req, res) => {
    const books = await book_model_1.default.find();
    res.status(200).json({ success: true, data: books });
});
exports.getBookById = (0, express_async_handler_1.default)(async (req, res) => {
    const book = await book_model_1.default.findById(req.params.bookId);
    res.status(200).json({ success: true, data: book });
});
exports.updateBook = (0, express_async_handler_1.default)(async (req, res) => {
    const book = await book_model_1.default.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
    res.status(200).json({ success: true, data: book });
});
exports.deleteBook = (0, express_async_handler_1.default)(async (req, res) => {
    await book_model_1.default.findByIdAndDelete(req.params.bookId);
    res.status(204).json({ success: true, data: null });
});
