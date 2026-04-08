import express from "express";
import mongoose from "mongoose";

import bookRoutes from "./routes/bookRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/librarymanagement")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/borrow", borrowRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


