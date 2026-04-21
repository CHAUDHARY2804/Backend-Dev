import jwt from "jsonwebtoken";
import crypto from "crypto";


export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};


export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};


export const generateResetToken = () => {
  const rawToken = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  return {
    rawToken,       
    hashedToken     
  };
};