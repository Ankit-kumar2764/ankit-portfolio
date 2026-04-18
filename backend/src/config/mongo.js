const mongoose = require("mongoose");

async function connectMongo() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.warn("MONGODB_URI is not set. Running with fallback data only.");
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.warn("MongoDB connection failed. Running with fallback data only.");
    console.warn(error.message);
    return false;
  }
}

module.exports = { connectMongo };
