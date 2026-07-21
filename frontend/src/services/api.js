const API_BASE_URL = "http://localhost:5000/api";

// Get JWT Authorization Header
function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
}

// Upload Audio
export async function uploadAudio(audioBlob) {
  const formData = new FormData();

  formData.append("audio", audioBlob, "consultation.wav");

  const response = await fetch(
    `${API_BASE_URL}/upload-audio`,
    {
      method: "POST",
      body: formData,
    }
  );

  return await response.json();
}

// Save Consultation
export async function saveConsultation(data) {
  const response = await fetch(
    `${API_BASE_URL}/consultations/save`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },

      body: JSON.stringify(data),
    }
  );

  return await response.json();
}

// Get Consultations
export async function getConsultations() {
  const response = await fetch(
    `${API_BASE_URL}/consultations`,
    {
      headers: getAuthHeaders(),
    }
  );

  return await response.json();
}

// Delete Consultation
export async function deleteConsultation(id) {
  const response = await fetch(
    `${API_BASE_URL}/consultations/${id}`,
    {
      method: "DELETE",

      headers: getAuthHeaders(),
    }
  );

  return await response.json();
}

// Register User
export async function registerUser(userData) {
  const response = await fetch(
    `${API_BASE_URL}/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  return await response.json();
}

// Login User
export async function loginUser(credentials) {
  const response = await fetch(
    `${API_BASE_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(credentials),
    }
  );

  return await response.json();
}