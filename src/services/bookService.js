import Book from "../models/book.js";

export const createBook = async (data) => {
  return await Book.create(data);
};