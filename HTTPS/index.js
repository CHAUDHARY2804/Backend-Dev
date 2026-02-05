// import express from "express";
// import mid from "./mid.js";
// import saveUser from "./res.js";
// import logger from "./logger.js";


// const app = express();
// const port = 3000;

// app.use(express.json());

// app.post("/signup", mid, (req, res, next) => {
//   try {
//     const result = saveUser(req);

//     if (result === "exists") {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     return res.status(201).json({ message: "Signup successful", user: result });
//   } catch (err) {
//     next(err);
//   }
// });
// app.post("/res", mid);

// app.listen(port, () => {
//   console.log(`Movie Ticket Booking app listening at http://localhost:${port}`);
// });
import express from "express";
import cors from "cors";
import logger from "./logger";

import usermidd3 from "./midd3.js";
let app = express();
let port = 8080;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(" <h1> Welcome to the food api </h1> ");
});
app.post("/signup", usermidd3, logger);
app.post("/login", usermidd3, login);

app.listen(port, () => {
  console.log("connect");
});
