
import express from "express";
import { createAppointment } from "../controllers/appointment.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createAppointment);

export default router;