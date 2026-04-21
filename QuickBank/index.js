// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoSanitize from "express-mongo-sanitize";

import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import { sanitizeData } from "./middleware/sanitize.js";

dotenv.config();
connectDB();

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(sanitizeData);
app.use(mongoSanitize());

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 10 * 60 * 1000
  }
}));

app.use("/api/auth", authRoutes);
app.use("/api/transfer", transactionRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);