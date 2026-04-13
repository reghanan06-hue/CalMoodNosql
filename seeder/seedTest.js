

import mongoose from "mongoose";
import Test from "../models/Test.js";

const MONGO_URI = "mongodb://localhost:27017/moodApp";

async function seedTests() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    await Test.deleteMany();
    console.log("🗑️ Old tests removed");

    const tests = [
      { title: "Bonheur", Score: 90, iconSymbol: "😊" },
      { title: "Obsession", Score: 40, iconSymbol: "😣" },
      { title: "Dépression", Score: 20, iconSymbol: "😔" },
      { title: "Panique", Score: 30, iconSymbol: "😐" },
      { title: "Confiance", Score: 85, iconSymbol: "😊" },
      { title: "Stress", Score: 35, iconSymbol: "😫" },
      { title: "Dormir", Score: 70, iconSymbol: "😴" },
      { title: "Alimentation", Score: 65, iconSymbol: "🍽️" },
      { title: "Affectif", Score: 80, iconSymbol: "❤️" },
      { title: "Émotionnel", Score: 50, iconSymbol: "😣" }
    ];

    await Test.insertMany(tests);

    console.log("🚀 Seed completed successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
}

seedTests();