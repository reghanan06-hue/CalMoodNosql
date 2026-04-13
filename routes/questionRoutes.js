import express from "express";
import {
  createQuestion,
  getAllQuestions,
  getQuestionsByTest,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} from "../controllers/questionController.js";

const router = express.Router();

// Ajouter une question
router.post("/", createQuestion);

// Toutes les questions
router.get("/", getAllQuestions);

// Questions par test
router.get("/test/:testId", getQuestionsByTest);

// Une seule question
router.get("/:id", getQuestionById);

// Modifier
router.put("/:id", updateQuestion);

// Supprimer
router.delete("/:id", deleteQuestion);

export default router;