const BlogModel = require("../models/Blog");

// Get all blogs
exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

// Create a new blog
exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};

// Get one blog by ID
exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};

// Update a blog by ID
exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog, { new: true });
};

// Delete a blog by ID
exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};
