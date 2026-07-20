import express from "express";

import {
  saveConsultation,
  getAllConsultations,
  deleteConsultation,
} from "../controllers/consultationController.js";

const router = express.Router();

// Save Consultation
router.post("/save", saveConsultation);

// Get All Consultations
router.get("/", getAllConsultations);

// Delete Consultation
router.delete("/:id", deleteConsultation);

export default router;