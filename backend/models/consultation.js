import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    // User who created this consultation
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    patient: {
      name: String,
      age: Number,
      gender: String,
      patientId: String,
      phone: String,
    },

    doctor: {
      name: String,
      department: String,
      hospital: String,
    },

    transcript: {
      type: String,
      required: true,
    },

    soapNote: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Consultation", consultationSchema);