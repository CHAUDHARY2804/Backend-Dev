import express from "express";
import { borrowBooks, getSummary } from "../services/borrowService.js";
import { validate } from "../middleware/validate.js";
import { borrowSchema } from "../validators/borrowValidator.js";

const router = express.Router();

router.post("/", validate(borrowSchema), async (req, res, next) => {
  try {
    const { memberId, bookIds } = req.body;
    const record = await borrowBooks(memberId, bookIds);
    res.json(record);
  } catch (err) {
    next(err);
  }
});

router.get("/summary/:id", async (req, res, next) => {
  try {
    const data = await getSummary(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;