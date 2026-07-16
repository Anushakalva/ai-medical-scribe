import { useRef, useState } from "react";
import {
  uploadAudio,
  saveConsultation,
} from "../../services/api";

export default function RecordControls({
  patient,
  doctor,
  setTranscript,
  setSoapNote,
}) {
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        try {
          setLoading(true);

          // Upload audio to FastAPI
          const result = await uploadAudio(audioBlob);

          console.log("FastAPI Response:", result);

          if (result.success) {
            // Display transcript & SOAP note
            setTranscript(result.transcript);
            setSoapNote(result.soap_note);

            // Save consultation to MongoDB
            const saveResult = await saveConsultation({
              patient,
              doctor,
              transcript: result.transcript,
              soapNote: result.soap_note,
            });

            console.log("MongoDB Response:", saveResult);

            if (saveResult.success) {
              alert("✅ Consultation saved successfully!");
            } else {
              alert("⚠️ Consultation generated but could not be saved.");
            }

          } else {
            alert(result.message || "Transcription failed.");
          }

        } catch (error) {
          console.error(error);
          alert("Error processing consultation.");
        } finally {
          setLoading(false);
        }
      };

      mediaRecorder.start();
      setRecording(true);

    } catch (error) {
      console.error(error);
      alert("Microphone permission denied.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();

      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());

      setRecording(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {!recording ? (
        <button
          onClick={startRecording}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition disabled:bg-gray-400"
        >
          🎤 Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition disabled:bg-gray-400"
        >
          ⏹ Stop Recording
        </button>
      )}

      {loading && (
        <div className="flex items-center gap-2 text-indigo-600 font-medium">
          <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <span>Generating Transcript & SOAP Note...</span>
        </div>
      )}
    </div>
  );
}