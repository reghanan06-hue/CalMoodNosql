import express from "express";
const router = express.Router();

import {
  createPatient,
  getPatients,
  getPatient,
   updatePatient
} from "../controllers/patientController.js";

router.post("/", createPatient);
router.get("/", getPatients);
router.get("/:id", getPatient);
router.patch("/:id", updatePatient);
export default router;