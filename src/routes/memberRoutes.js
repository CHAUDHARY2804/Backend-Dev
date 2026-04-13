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

export default router;  // This file defines the routes for member-related operations. It includes a POST route to create a new member, which validates the request body against the memberSchema before calling the createMember service function. If any errors occur during the process, they are passed to the next middleware for error handling.