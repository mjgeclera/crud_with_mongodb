const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const blogRouter = require("./routes/BlogRoutes");

const app = express();
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// connect to MongoDB
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/CRUD";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// register routes
app.use("/api/blogs", blogRouter);

// fallback route (for 404s or SPA)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
