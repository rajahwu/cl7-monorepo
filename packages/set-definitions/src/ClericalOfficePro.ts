import SetDefinition from "./SetDefinition";

const ClericalOfficePro = new SetDefinition(
  {
    primary: "#2F5597",
    secondary: "#385D8A",
    accent: "#64748B",
    success: "#16A34A",
    bg: "#FFFFFF",
    card: "#F8FAFC",
    text: "#0F172A",
    muted: "#64748B",
    border: "#E2E8F0",
  },
  {
    bodyFont: "Calibri",
    bodyFallback: "Carlito, Arial",
    headingFont: "Carlito",
    monoFont: "Consolas",
    bodySize: "11pt",
    h1Size: "20pt",
    h2Size: "16pt",
    h3Size: "14pt",
    h4Size: "12pt",
    h5Size: "11pt",
    h6Size: "11pt",
    lineHeightNormal: 1.5,
    lineHeightTight: 1.3,
  },
  {
    paragraphBefore: "8pt",
    paragraphAfter: "8pt",
    bulletIndent: "0.25″",
  },
  {
    button: "4px",
    card: "6px",
    input: "4px",
  },
  {
    low: "0 1px 2px rgba(0,0,0,0.05)",
    medium: "0 2px 4px rgba(0,0,0,0.07)",
    high: "0 4px 8px rgba(0,0,0,0.1)",
  }
);

export default ClericalOfficePro;
