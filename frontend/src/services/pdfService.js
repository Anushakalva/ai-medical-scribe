import jsPDF from "jspdf";

export function downloadConsultationPDF(consultation) {
  const doc = new jsPDF();

  let y = 20;

  // Title
  doc.setFontSize(20);
  doc.text("AI Medical Scribe", 20, y);

  y += 10;

  doc.setFontSize(14);
  doc.text("Consultation Report", 20, y);

  y += 15;

  // Patient Details
  doc.setFontSize(16);
  doc.text("Patient Details", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(`Name: ${consultation.patient?.name || ""}`, 20, y);
  y += 8;

  doc.text(`Age: ${consultation.patient?.age || ""}`, 20, y);
  y += 8;

  doc.text(`Gender: ${consultation.patient?.gender || ""}`, 20, y);
  y += 8;

  doc.text(`Phone: ${consultation.patient?.phone || ""}`, 20, y);

  y += 15;

  // Doctor Details
  doc.setFontSize(16);
  doc.text("Doctor Details", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(`Doctor: ${consultation.doctor?.name || ""}`, 20, y);
  y += 8;

  doc.text(`Department: ${consultation.doctor?.department || ""}`, 20, y);
  y += 8;

  doc.text(`Hospital: ${consultation.doctor?.hospital || ""}`, 20, y);

  y += 15;

  // Transcript
  doc.setFontSize(16);
  doc.text("Transcript", 20, y);

  y += 10;

  doc.setFontSize(12);

  const transcript = doc.splitTextToSize(
    consultation.transcript || "",
    170
  );

  doc.text(transcript, 20, y);

  y += transcript.length * 7 + 10;

  // SOAP Note
  doc.setFontSize(16);
  doc.text("SOAP Note", 20, y);

  y += 10;

  doc.setFontSize(12);

  const soap = doc.splitTextToSize(
    consultation.soapNote || "",
    170
  );

  doc.text(soap, 20, y);

  // Save PDF
  doc.save(
    `${consultation.patient?.name || "consultation"}_Consultation.pdf`
  );
}