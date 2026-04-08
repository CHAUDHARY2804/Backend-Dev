import express from "express";
import { createMember } from "../services/memberService.js";
import { validate } from "../middleware/validate.js";
import { memberSchema } from "../validators/memberValidator.js";

const router = express.Router();

router.post("/", validate(memberSchema), async (req, res, next) => {
  try {
    const member = await createMember(req.body);
    res.json(member);
  } catch (err) {
    next(err);
  }
});

export default router;