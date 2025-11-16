import SetDefinition from "./SetDefinition.js";

const FederalFlow = new SetDefinition(
  {
    primary: "#1B3A6B",
    secondary: "#2E5090",
    accent: "#4A7BA7",
    success: "#2D5016",
    bg: "#FFFFFF",
    card: "#F5F7FA",
    text: "#0A0E27",
    muted: "#5A6B7D",
    border: "#D4DCE6",
  },
  {
    bodyFont: "Times New Roman",
    bodyFallback: "Georgia, Merriweather",
    headingFont: "Georgia",
    monoFont: "Courier New",
    bodySize: "12pt",
    h1Size: "20pt",
    h2Size: "16pt",
    h3Size: "14pt",
    h4Size: "12pt",
    h5Size: "12pt",
    h6Size: "12pt",
    lineHeightNormal: 1.5,
    lineHeightTight: 1.3,
  },
  {
    paragraphBefore: "6pt",
    paragraphAfter: "6pt",
    bulletIndent: "0.25″",
  },
  {
    button: "2px",
    card: "4px",
    input: "2px",
  },
  {
    low: "0 1px 2px rgba(0,0,0,0.03)",
    medium: "0 2px 4px rgba(0,0,0,0.05)",
    high: "0 3px 6px rgba(0,0,0,0.08)",
  }
);

export default FederalFlow;