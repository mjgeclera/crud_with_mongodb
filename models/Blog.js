const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the structure of a blog post
const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model("Blog", blogSchema);
