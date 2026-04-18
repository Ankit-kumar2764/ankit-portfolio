const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
