import express from "express";
import Book from "../models/Book.js";
import { validateYear } from "../middleware/validateYear.js";

const router = express.Router();



router.post("/", validateYear, async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});


router.get("/", async (req, res) => {
  const { author, year, page = 1, limit = 5 } = req.query;

  let filter = {};

  if (author) filter.author = author;
  if (year) filter.year = year;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(books);
});


router.get("/search", async (req, res) => {
  const { title } = req.query;

  const books = await Book.find({
    title: { $regex: title, $options: "i" }
  });

  res.json(books);
});


router.put("/:id", validateYear, async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});


router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;