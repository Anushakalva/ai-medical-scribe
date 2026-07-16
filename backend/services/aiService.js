import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export async function transcribeAudio(filePath) {
  try {
    const formData = new FormData();

    formData.append("file", fs.createReadStream(filePath));

    const response = await axios.post(
      "http://127.0.0.1:8000/transcribe",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );

    return response.data;
  } catch (error) {
    console.error("FastAPI Error:");

    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }

    throw error;
  }
}