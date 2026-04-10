import express from "express";
import Author from "../models/Author.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const author = await Author.create(req.body);
  res.json(author);
});

router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});

router.get("/:id", async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
});

router.put("/:id", async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
});

router.delete("/:id", async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;