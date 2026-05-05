import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  dueDate: Date
}, { timestamps: true });

taskSchema.index({ userId: 1, title: 1 }, { unique: true }); // prevent duplicate titles

export default mongoose.model("Task", taskSchema);