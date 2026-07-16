from fastapi import FastAPI
from app.routes.transcription import router

app = FastAPI(title="AI Medical Scribe API")

app.include_router(router)

@app.get("/")
def home():
    return {
        "status": "running",
        "message": "AI Medical Scribe API Running 🚀"
    }