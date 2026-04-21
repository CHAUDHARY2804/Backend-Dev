import rateLimit from "express-rate-limit";

export const transferLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5
});