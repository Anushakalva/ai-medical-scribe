const API_BASE_URL = "http://localhost:5000/api";

// Upload Audio
export async function uploadAudio(audioBlob) {
  try {
    const formData = new FormData();

    formData.append("audio", audioBlob, "consultation.wav");

    const response = await fetch(`${API_BASE_URL}/upload-audio`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
}

// Save Consultation
export async function saveConsultation(data) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/consultations/save`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get All Consultations
export async function getConsultations() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/consultations`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete Consultation
export async function deleteConsultation(id) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/consultations/${id}`,
      {
        method: "DELETE",
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}