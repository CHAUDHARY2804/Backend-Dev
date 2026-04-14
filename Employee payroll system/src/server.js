import express from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employeeRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/payrollDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/employees", employeeRoutes);

// error middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});