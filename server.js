const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/auth", "./routes/api/auth");
app.use("/api/posts", "./routes/api/posts");
app.use("/api/profile", "./routes/api/profile");
app.use("/api/users", "./routes/api/users");

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
