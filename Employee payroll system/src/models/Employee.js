import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  empId: Number,
  name: String,
  department: String,
  basicSalary: Number,
  bonus: {
    type: Number,
    default: 0
  },
  deductions: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("Employee", employeeSchema);