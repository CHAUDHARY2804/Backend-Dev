import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  memberId: Number,
  name: String,
  membershipType: {
    type: String,
    enum: ["Normal", "Gold"],
    default: "Normal"
  }
});

export default mongoose.model("Member", memberSchema);