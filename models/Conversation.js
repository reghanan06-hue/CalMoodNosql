import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  dateDebut: { type: Date, default: Date.now },
  activities :String
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;