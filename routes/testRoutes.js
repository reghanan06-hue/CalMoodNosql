import express from "express";
import {
  createTest,
  getAllTests,
  getTestsByPatient,
  getTestById,
  updateTest,
  deleteTest
} from "../controllers/testController.js";

const router = express.Router();

// ➕ créer test
router.post("/", createTest);

// 📥 tous les tests
router.get("/", getAllTests);

// 🎯 tests par patient
router.get("/patient/:patientId", getTestsByPatient);

// 🔍 un test
router.get("/:id", getTestById);

// ✏️ modifier
router.put("/:id", updateTest);

// ❌ supprimer
router.delete("/:id", deleteTest);

export default router;