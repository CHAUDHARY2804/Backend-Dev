import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  balance: { type: Number, default: 1000 },
  accountNumber: String,

  failedLoginAttempts: { type: Number, default: 0 },
  lockUntil: Date,

  twoFASecret: String,
  twoFAEnabled: Boolean,

  resetToken: String,
  resetTokenExpiry: Date
});

export default mongoose.model("User", userSchema);