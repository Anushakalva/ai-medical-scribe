from faster_whisper import WhisperModel
import os

print("🚀 WHISPER SERVICE LOADED")

model = WhisperModel(
    "small",
    device="cpu",
    compute_type="int8"
)

def transcribe_audio(audio_path: str):
    print("=" * 50)
    print("🚀 transcribe_audio() CALLED")
    print("Audio Path:", audio_path)
    print("Exists:", os.path.exists(audio_path))

    if os.path.exists(audio_path):
        print("File Size:", os.path.getsize(audio_path), "bytes")

    segments, info = model.transcribe(
        audio_path,
        language="en",
        beam_size=5,
        vad_filter=False
    )

    print("Detected Language:", info.language)
    print("=" * 50)

    transcript = ""

    for segment in segments:
        print(f"[{segment.start:.2f}s - {segment.end:.2f}s] {segment.text}")
        transcript += segment.text.strip() + " "

    print("FINAL TRANSCRIPT:")
    print(transcript)

    return transcript.strip()