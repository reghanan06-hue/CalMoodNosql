import Patient from "../models/Patient.js";

// CREATE
export const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE
export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ error: "Patient non trouvé" });
    }

    res.json(patient);
  } catch (error) {
    // Si ID invalide, renvoie 400 au lieu de planter
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID invalide" });
    }
    res.status(500).json({ error: error.message });
  }
};

// UPDATE patient
export const updatePatient = async (req, res) => {
  try {
    console.log("ID reçu :", req.params.id);
    console.log("Body reçu :", req.body);

    const update = req.body;
    if (!update || Object.keys(update).length === 0) {
      return res.status(400).json({ error: "Aucune donnée fournie pour la mise à jour" });
    }

    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!patient) return res.status(404).json({ error: "Patient non trouvé" });

    console.log("Patient mis à jour :", patient);
    res.status(200).json(patient);
  } catch (error) {
    console.error("Erreur updatePatient :", error);
    if (error.name === "CastError") return res.status(400).json({ error: "ID invalide" });
    res.status(500).json({ error: error.message });
  }
};