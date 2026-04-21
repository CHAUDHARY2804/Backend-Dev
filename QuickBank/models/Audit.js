import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  action: {
    type: String,
    required: true
  },
  amount: Number,
  ip: String,
  userAgent: String,
  status: {
    type: String,
    enum: ["SUCCESS", "FAILED"],
    default: "SUCCESS"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Audit", auditSchema);