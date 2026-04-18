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
