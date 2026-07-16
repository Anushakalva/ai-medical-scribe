import express from "express";

import {
  saveConsultation,
  getAllConsultations,
} from "../controllers/consultationController.js";

const router = express.Router();

// Save Consultation
router.post("/save", saveConsultation);

// Get All Consultations
router.get("/", getAllConsultations);

export default router;