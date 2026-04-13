import Test from "../models/Test.js";

// ➕ Créer un test
export const createTest = async (req, res) => {
  try {
    const { patient, title, Scrore, iconSymbol } = req.body;

    const test = new Test({
      patient,
      title,
      Scrore,
      iconSymbol
    });

    await test.save();
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Tous les tests
export const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find().populate("patient");
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🎯 Tests par patient
export const getTestsByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    const tests = await Test.find({ patient: patientId });
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔍 Un test
export const getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);

    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    res.json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ Modifier test
export const updateTest = async (req, res) => {
  try {
    const updated = await Test.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Supprimer test
export const deleteTest = async (req, res) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    res.json({ message: "Test deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};