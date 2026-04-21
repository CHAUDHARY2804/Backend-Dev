
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import mongoose from "mongoose";

export const transfer = async (req, res) => {
  const { toAccount, amount, description } = req.body;

  if (amount <= 0 || amount > 100000) {
    return res.status(400).json({ msg: "Invalid amount" });
  }

  const sender = await User.findById(req.user.id);
  const receiver = await User.findOne({ accountNumber: toAccount });

  if (!receiver) return res.status(404).json({ msg: "Receiver not found" });

  if (sender.balance < amount) {
    return res.status(400).json({ msg: "Insufficient balance" });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save({ session });
    await receiver.save({ session });

    await Transaction.create([{
      from: sender.accountNumber,
      to: receiver.accountNumber,
      amount,
      description
    }], { session });

    await session.commitTransaction();

    res.json({ msg: "Transfer success" });
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({ msg: "Transaction failed" });
  }
};