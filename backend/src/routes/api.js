const express = require("express");
const Project = require("../models/Project");
const ContactMessage = require("../models/ContactMessage");
const seedProjects = require("../data/seedProjects");
const { getLeetCodeStatsFromSql } = require("../config/sql");

const router = express.Router();

const fallbackStats = {
  username: "ankit-kumar2764",
  profileUrl: "https://leetcode.com/ankit-kumar2764/",
  totalSolved: 412,
  easy: 183,
  medium: 181,
  hard: 48,
  topics: ["Arrays", "Strings", "DP", "Graphs", "Trees"],
};

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function validateProjectPayload(payload) {
  const requiredFields = [
    "title",
    "description",
    "techStack",
    "category",
    "imageUrl",
    "githubUrl",
    "liveUrl",
  ];

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return `Missing required fields: ${missing.join(", ")}`;
  }

  if (!Array.isArray(payload.techStack) || payload.techStack.length === 0) {
    return "techStack must be a non-empty array.";
  }

  return null;
}

function isAuthorizedForProjectCreate(req) {
  const requiredToken = process.env.PROJECT_ADMIN_TOKEN;
  if (!requiredToken) {
    return true;
  }

  const authorizationHeader = req.headers.authorization || "";
  const bearerToken = authorizationHeader.startsWith("Bearer ")
    ? authorizationHeader.slice(7).trim()
    : "";
  const headerToken = req.headers["x-admin-token"] || bearerToken;
  return headerToken === requiredToken;
}

router.get("/health", (_, res) => {
  res.json({ ok: true, service: "portfolio-api" });
});

router.get("/projects", async (_, res) => {
  try {
    const projects = await Project.find().sort({ featured: -1, createdAt: -1 }).lean();

    if (projects.length) {
      return res.json({ source: "mongodb", data: projects });
    }

    return res.json({ source: "fallback", data: seedProjects });
  } catch (error) {
    return res.json({ source: "fallback", data: seedProjects });
  }
});

router.post("/projects", async (req, res) => {
  if (!isAuthorizedForProjectCreate(req)) {
    return res.status(401).json({
      message:
        "Unauthorized request. Check PROJECT_ADMIN_TOKEN in backend .env and VITE_PROJECT_ADMIN_TOKEN in frontend .env.local.",
    });
  }

  const { title, description, techStack, category, imageUrl, githubUrl, liveUrl, featured } = req.body;
  const validationError = validateProjectPayload({
    title,
    description,
    techStack,
    category,
    imageUrl,
    githubUrl,
    liveUrl,
  });

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const slug = slugify(title);

  try {
    const existing = await Project.findOne({ slug });
    if (existing) {
      return res.status(409).json({ message: "Project with this title already exists." });
    }

    const createdProject = await Project.create({
      title,
      slug,
      description,
      techStack: techStack.map((item) => String(item).trim()).filter(Boolean),
      category,
      imageUrl,
      githubUrl,
      liveUrl,
      featured: Boolean(featured),
    });

    return res.status(201).json({ message: "Project added successfully.", data: createdProject });
  } catch (error) {
    // Fallback mode when MongoDB is unavailable in local development.
    const fallbackProject = {
      title,
      slug,
      description,
      techStack: techStack.map((item) => String(item).trim()).filter(Boolean),
      category,
      imageUrl,
      githubUrl,
      liveUrl,
      featured: Boolean(featured),
      _id: `fallback-${Date.now()}`,
    };

    seedProjects.unshift(fallbackProject);
    return res.status(201).json({
      message: "Project added in fallback mode. Connect MongoDB to persist it.",
      data: fallbackProject,
    });
  }
});

router.get("/leetcode-stats", async (_, res) => {
  const sqlStats = await getLeetCodeStatsFromSql("ankit-kumar2764");

  if (sqlStats) {
    return res.json({
      source: "sql",
      data: {
        ...fallbackStats,
        ...sqlStats,
      },
    });
  }

  return res.json({ source: "mock", data: fallbackStats });
});

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const savedMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      message: "Message sent successfully.",
      id: savedMessage._id,
    });
  } catch (error) {
    return res.status(201).json({
      message:
        "Message received in fallback mode. Connect MongoDB to persist contact messages.",
    });
  }
});

module.exports = router;
