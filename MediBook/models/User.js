import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["Patient", "Doctor", "Nurse", "Admin"],
    default: "Patient"
  }
});

export default mongoose.model("User", userSchema);