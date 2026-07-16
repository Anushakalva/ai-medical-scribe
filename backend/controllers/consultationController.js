import Consultation from "../models/Consultation.js";

// Save Consultation
export const saveConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.create(req.body);

    res.status(201).json({
      success: true,
      consultation,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save consultation",
    });
  }
};

// Get All Consultations
export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      consultations,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch consultations",
    });
  }
};