
import AuditLog from "../models/AuditLog.js";

export const logAudit = async ({ userId, action, resource, ip }) => {
  try {
    await AuditLog.create({
      userId,
      action,
      resource,
      ip,
      timestamp: new Date()
    });
  } catch (err) {
    console.error("Audit log error:", err.message);
  }
};