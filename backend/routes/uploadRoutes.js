import express from "express";
import multer from "multer";
import { transcribeAudio } from "../services/aiService.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.wav`);
  },
});

const upload = multer({ storage });

router.post("/upload-audio", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No audio uploaded",
      });
    }

    const result = await transcribeAudio(req.file.path);

    return res.json({
      success: true,
      transcript: result.transcript,
      soap_note: result.soap_note,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to process audio",
    });
  }
});

export default router;