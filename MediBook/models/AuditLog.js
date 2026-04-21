
import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  userId: String,
  action: String,
  resource: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("AuditLog", auditSchema);