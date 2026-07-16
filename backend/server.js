import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";
import connectDB from "./config/db.js";
import consultationRoutes from "./routes/consultationRoutes.js";
dotenv.config();
connectDB();
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);
app.use("/api/consultations", consultationRoutes);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Medical Scribe Backend Running 🚀"
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});