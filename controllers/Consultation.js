import Consultation from "../models/Consultation.js";


// CREATE
exports.createConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.create(req.body);
    res.json(consultation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getConsultations = async (req, res) => {
  const consultations = await Consultation.find();
    res.json(consultations);

};

// GET ONE
exports.getConsultation = async (req, res) => {
  const consultation = await Consultation.findById(req.params.id);
  res.json(consultation);
};
