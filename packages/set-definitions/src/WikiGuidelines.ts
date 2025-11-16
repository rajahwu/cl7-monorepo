import SetDefinition from "./SetDefinition.js";

const WikiGuidelines = new SetDefinition(
  {
    primary: "#4F7328",
    secondary: "#5F9B2E",
    accent: "#84CC16",
    success: "#22C55E",
    bg: "#FFFFFF",
    card: "#F7FEE7",
    text: "#1B1F0B",
    muted: "#6B7280",
    border: "#D4D4D8",
  },
  {
    bodyFont: "Verdana",
    bodyFallback: "Arial, Helvetica",
    headingFont: "Verdana",
    monoFont: "Courier New",
    bodySize: "11pt",
    h1Size: "20pt",
    h2Size: "16pt",
    h3Size: "14pt",
    h4Size: "12pt",
    h5Size: "11pt",
    h6Size: "11pt",
    lineHeightNormal: 1.6,
    lineHeightTight: 1.4,
  },
  {
    paragraphBefore: "10pt",
    paragraphAfter: "10pt",
    bulletIndent: "0.25″",
  },
  {
    button: "4px",
    card: "6px",
    input: "4px",
  },
  {
    low: "0 1px 2px rgba(0,0,0,0.04)",
    medium: "0 2px 4px rgba(0,0,0,0.06)",
    high: "0 3px 6px rgba(0,0,0,0.08)",
  }
);

export default WikiGuidelines;
