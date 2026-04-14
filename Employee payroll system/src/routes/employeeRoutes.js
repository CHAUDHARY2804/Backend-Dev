import express from "express";
import { createEmployee, calculateSalary } from "../services/payrollService.js";

const router = express.Router();

// add employee
router.post("/", async (req, res, next) => {
  try {
    const emp = await createEmployee(req.body);
    res.json(emp);
  } catch (err) {
    next(err);
  }
});

// salary calculation
router.get("/salary/:empId", async (req, res, next) => {
  try {
    const data = await calculateSalary(req.params.empId);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;