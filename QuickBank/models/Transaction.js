import mongoose from "mongoose";

const schema = new mongoose.Schema({
  from: String,
  to: String,
  amount: Number,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Transaction", schema);