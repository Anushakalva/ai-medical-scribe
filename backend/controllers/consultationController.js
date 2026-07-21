import Consultation from "../models/Consultation.js";

// Save Consultation
export const saveConsultation = async (req, res) => {
  try {
    // Get logged-in user's ID from verified JWT
    const userId = req.user.id;

    // Save consultation with the authenticated user's ID
    const consultation = await Consultation.create({
      ...req.body,
      userId,
    });

    res.status(201).json({
      success: true,
      consultation,
    });
  } catch (error) {
    console.error("Save Consultation Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save consultation",
    });
  }
};

// Get All Consultations for Logged-in User
export const getAllConsultations = async (req, res) => {
  try {
    // Get logged-in user's ID from verified JWT
    const userId = req.user.id;

    // Fetch only consultations belonging to this user
    const consultations = await Consultation.find({
      userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      consultations,
    });
  } catch (error) {
    console.error("Fetch Consultations Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch consultations",
    });
  }
};

// Delete Consultation
export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params;

    // Get logged-in user's ID from verified JWT
    const userId = req.user.id;

    // Find consultation only if it belongs to the logged-in user
    const consultation = await Consultation.findOne({
      _id: id,
      userId,
    });

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message:
          "Consultation not found or you are not authorized to delete it",
      });
    }

    // Delete only the authenticated user's consultation
    await Consultation.findOneAndDelete({
      _id: id,
      userId,
    });

    res.status(200).json({
      success: true,
      message: "Consultation deleted successfully",
    });
  } catch (error) {
    console.error("Delete Consultation Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete consultation",
    });
  }
};