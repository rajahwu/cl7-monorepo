import SetDefinition from "./SetDefinition.js";

const ClerkRoomStandard = new SetDefinition(
  {
    primary: "#003366",
    secondary: "#004080",
    accent: "#6B7280",
    success: "#059669",
    bg: "#FFFFFF",
    card: "#F9FAFB",
    text: "#1F2937",
    muted: "#9CA3AF",
    border: "#E5E7EB",
  },
  {
    bodyFont: "Calibri",
    bodyFallback: "Arial, Helvetica",
    headingFont: "Calibri",
    monoFont: "Consolas",
    bodySize: "11pt",
    h1Size: "16pt",
    h2Size: "14pt",
    h3Size: "12pt",
    h4Size: "11pt",
    h5Size: "11pt",
    h6Size: "11pt",
    lineHeightNormal: 1.5,
    lineHeightTight: 1.3,
  },
  {
    paragraphBefore: "6pt",
    paragraphAfter: "6pt",
    bulletIndent: "0.25″",
  },
  {
    button: "3px",
    card: "4px",
    input: "3px",
  },
  {
    low: "0 1px 2px rgba(0,0,0,0.04)",
    medium: "0 2px 3px rgba(0,0,0,0.06)",
    high: "0 3px 6px rgba(0,0,0,0.08)",
  }
);

export default ClerkRoomStandard;