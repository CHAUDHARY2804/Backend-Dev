
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

export const register = async (req, res) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "Invalid email" });
  }

  const hash = await bcrypt.hash(password, 12);
  const user = await User.create({ email, password: hash });

  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(401).json({ msg: "Invalid" });

  if (user.lockUntil && user.lockUntil > Date.now()) {
    return res.status(403).json({ msg: "Account locked" });
  }

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    user.failedLoginAttempts++;
    if (user.failedLoginAttempts >= 5) {
      user.lockUntil = Date.now() + 15 * 60 * 1000;
    }
    await user.save();
    return res.status(401).json({ msg: "Invalid" });
  }

  user.failedLoginAttempts = 0;
  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m"
  });

  res.json({ token });
};