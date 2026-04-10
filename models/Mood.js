import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  date: { type: Date, default: Date.now },
  niveau: { type: Number, min: 1, max: 10 },
  note: String
});


const Mood = mongoose.model("Mood", moodSchema);

export default Mood;