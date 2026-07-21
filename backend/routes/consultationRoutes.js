import express from "express";

import {
  saveConsultation,
  getAllConsultations,
  deleteConsultation,
} from "../controllers/consultationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All consultation routes require authentication

router.post("/save", protect, saveConsultation);

router.get("/", protect, getAllConsultations);

router.delete("/:id", protect, deleteConsultation);

export default router;