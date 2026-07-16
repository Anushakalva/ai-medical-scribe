import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_soap_note(transcript: str):
    prompt = f"""
You are an experienced medical scribe.

Convert the following doctor-patient conversation into a structured SOAP note.

Conversation:
{transcript}

Return the output in this format:

Subjective:
Objective:
Assessment:
Plan:
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2
    )

    return response.choices[0].message.content