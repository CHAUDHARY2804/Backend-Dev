import Audit from "../models/Audit.js";

export const logAudit = async (data) => {
  await Audit.create(data);
};