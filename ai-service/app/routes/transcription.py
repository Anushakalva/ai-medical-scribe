from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.whisper_service import transcribe_audio
from app.services.soap_service import generate_soap_note

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    print("=" * 50)
    print("Received file:", file.filename)
    print("Saved at:", file_path)
    print("File size:", os.path.getsize(file_path), "bytes")
    print("=" * 50)

    transcript = transcribe_audio(file_path)

    print("Transcript:", transcript)

    soap_note = generate_soap_note(transcript)

    return {
        "success": True,
        "transcript": transcript,
        "soap_note": soap_note
    }