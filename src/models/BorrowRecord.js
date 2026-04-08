import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member"
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  }]
});

export default mongoose.model("BorrowRecord", borrowSchema);