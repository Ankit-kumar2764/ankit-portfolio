const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const apiRouter = require("./routes/api");
const { connectMongo } = require("./config/mongo");
const Project = require("./models/Project");
const seedProjects = require("./data/seedProjects");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api", apiRouter);

async function seedMongoProjects() {
  try {
    const count = await Project.countDocuments();
    if (count > 0) {
      return;
    }

    await Project.insertMany(seedProjects);
    console.log("Seeded projects into MongoDB");
  } catch (error) {
    console.warn("Could not seed MongoDB projects:", error.message);
  }
}

async function startServer() {
  const mongoConnected = await connectMongo();

  if (mongoConnected) {
    await seedMongoProjects();
  }

  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
}

startServer();
