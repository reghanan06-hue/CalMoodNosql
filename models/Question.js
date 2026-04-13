import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: true
  },

  question: {
    type: String,
    required: true
  },

  options: [
    {
      text: String,
      score: Number
    }
  ]
});

const Question = mongoose.model("Question", questionSchema);

export default Question;