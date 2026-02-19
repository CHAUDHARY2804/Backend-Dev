const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Response Time Logger Middleware
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const end = Date.now();
    console.log(`${req.method} ${req.url} - ${end - start}ms`);
  });

  next();
});

// View Engine Setup
app.set("view engine", "ejs");

// Dummy Data
const users = [
  { id: 1, name: "Nikhil" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Neha" }
];

let posts = [
  { id: 1, title: "First Post", content: "Hello World!" }
];

// ================= USERS ROUTE =================
app.get("/users", (req, res) => {
  const { name } = req.query;

  let filteredUsers = users;

  if (name) {
    filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.render("users", { users: filteredUsers });
});

// ================= CONTACT =================
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Form Submitted Successfully!");
});

// ================= GALLERY =================
app.get("/gallery", (req, res) => {
  const images = ["img1.jpg", "img2.jpg"];
  res.render("gallery", { images });
});

// ================= BLOG =================

// List Posts
app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

// New Post Form
app.get("/posts/new", (req, res) => {
  res.render("newPost");
});

// Create Post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };

  posts.push(newPost);
  res.redirect("/posts");
});

// View Single Post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) {
    return res.status(404).render("404");
  }

  res.render("singlePost", { post });
});

// ================= 404 =================
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
