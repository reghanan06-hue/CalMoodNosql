// // const mongoose = require("mongoose");
// export default mongoose;
// const patientSchema = new mongoose.Schema({
//   nom: String,
//   email: { type: String, unique: true },
//   age: Number,
//   password: String
// }, { timestamps: true });

// module.exports = mongoose.model("Patient", patientSchema);
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    nom: String,
    email: { type: String, unique: true },
    age: Number,
    password: String
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;