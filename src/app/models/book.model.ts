import { Schema, model, Model } from 'mongoose';
import { IBook, BookMethods } from '../interfaces/book.interface';

const bookSchema = new Schema<IBook, Model<IBook>, BookMethods>({
  title: { type: String, required: true, trim: true, minlength: 3 },
  author: { type: String, required: true, trim: true },
  genre: { type: String, required: true, enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'] },
  isbn: { type: String, required: true, unique: true, trim: true },
  description: { type: String, trim: true },
  copies: { type: Number, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true, versionKey: false });

bookSchema.method('updateAvailable', function() {
  if (this.copies === 0) {
    this.available = false;
  }
});

export default model('Book', bookSchema);
