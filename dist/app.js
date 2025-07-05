"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_routes_1 = __importDefault(require("./app/routes/book.routes"));
const borrow_routes_1 = __importDefault(require("./app/routes/borrow.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:5174', 'https://frontend-three-neon-81.vercel.app'],
}));
app.use('/api/books', book_routes_1.default);
app.use('/api/borrows', borrow_routes_1.default);
exports.default = app;
