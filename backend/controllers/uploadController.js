import { transcribeAudio } from "../services/aiService.js";

export const uploadAudio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No audio uploaded",
      });
    }

    // Send uploaded audio to FastAPI
    const transcriptionResult = await transcribeAudio(req.file.path);

    res.status(200).json({
      success: true,
      message: "Audio uploaded successfully",
      file: req.file.filename,
      transcript: transcriptionResult.transcript,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Transcription failed",
      error: error.message,
    });
  }
};