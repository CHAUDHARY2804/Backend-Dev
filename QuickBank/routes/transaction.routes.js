import express from "express";
import { transfer } from "../controllers/transaction.controller.js";
import { protect } from "../middleware/auth.js";
import { transferLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/", protect, transferLimiter, transfer);

export default router;