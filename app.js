const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
const app = express();

app.use(express.json());

// connect to MongoDB
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/CRUD";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// basic test route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog CRUD API!");
});

// register routes
app.use("/api/blogs", blogRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// register routes
app.use("/api/blogs", blogRouter);

// serve frontend
app.use(express.static("public"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;
