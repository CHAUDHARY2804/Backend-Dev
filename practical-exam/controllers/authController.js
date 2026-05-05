import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateTokens } from "../utils/generateTokens.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    passwordHash: hashed
  });

  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const tokens = generateTokens(user);

  res.json(tokens);
};