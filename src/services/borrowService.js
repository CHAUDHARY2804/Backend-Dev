import Member from "../models/member.js";
import Book from "../models/book.js";
import BorrowRecord from "../models/BorrowRecord.js";

export const borrowBooks = async (memberId, bookIds) => {

  const member = await Member.findOne({ memberId });
  if (!member) throw new Error("Member not found");

  const books = await Book.find({ bookId: { $in: bookIds } });

  const record = await BorrowRecord.create({
    member: member._id,
    books: books.map(b => b._id)
  });

  return record;
};

export const getSummary = async (id) => {
  const record = await BorrowRecord.findById(id)
    .populate("member")
    .populate("books");

  if (!record) throw new Error("Record not found");

  const total = record.books.reduce((sum, b) => sum + b.price, 0);

  let fine = 200;
  let discount = record.member.membershipType === "Gold" ? 0.15 : 0.05;

  return {
    member: record.member.name,
    books: record.books,
    totalValue: total,
    finalFine: fine - fine * discount
  };
};