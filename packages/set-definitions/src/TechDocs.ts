import SetDefinition from "./SetDefinition";

const TechDocs = new SetDefinition(
  {
    primary: "#0F172A",
    secondary: "#1E293B",
    accent: "#06B6D4",
    success: "#10B981",
    bg: "#FFFFFF",
    card: "#F1F5F9",
    text: "#0F172A",
    muted: "#64748B",
    border: "#CBD5E1",
  },
  {
    bodyFont: "Fira Code",
    bodyFallback: "Consolas, Source Code Pro",
    headingFont: "Consolas",
    monoFont: "Fira Code",
    bodySize: "10.5pt",
    h1Size: "18pt",
    h2Size: "16pt",
    h3Size: "14pt",
    h4Size: "12pt",
    h5Size: "11pt",
    h6Size: "10.5pt",
    lineHeightNormal: 1.5,
    lineHeightTight: 1.3,
  },
  {
    scale: {
      '0': "0px",
      '1': "4px",
      '2': "8px",
      '3': "12px",
      '4': "16px",
      '6': "24px",
      '8': "32px",
      '12': "48px",
      '16': "64px",
    },
    paragraphBefore: "8pt",
    paragraphAfter: "8pt",
    bulletIndent: "0.3″",
  },
  {
    button: "3px",
    card: "4px",
    input: "3px",
  },
  {
    low: "0 1px 2px rgba(0,0,0,0.04)",
    medium: "0 2px 4px rgba(0,0,0,0.06)",
    high: "0 4px 6px rgba(0,0,0,0.08)",
  }
);

export default TechDocs;