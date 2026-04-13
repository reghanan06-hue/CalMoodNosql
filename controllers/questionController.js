import Question from "../models/Question.js";


// 🔹 1. Ajouter une question
export const createQuestion = async (req, res) => {
  try {
    const { test, question, options } = req.body;

    const newQuestion = new Question({
      test,
      question,
      options
    });

    await newQuestion.save();

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 2. Récupérer toutes les questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("test");
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 3. Récupérer questions par Test
export const getQuestionsByTest = async (req, res) => {
  try {
    const { testId } = req.params;

    const questions = await Question.find({ test: testId });

    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 4. Récupérer une seule question
export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 5. Modifier une question
export const updateQuestion = async (req, res) => {
  try {
    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 6. Supprimer une question
export const deleteQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};