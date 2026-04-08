import express from "express";
import { createBook } from "../services/bookService.js";
import { validate } from "../middleware/validate.js";
import { bookSchema } from "../validators/bookValidator.js";

const router = express.Router();

router.post("/", validate(bookSchema), async (req, res, next) => {
  try {
    const book = await createBook(req.body);
    res.json(book);
  } catch (err) {
    next(err);
  }
});

export default router;