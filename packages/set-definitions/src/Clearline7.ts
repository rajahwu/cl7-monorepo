import SetDefinition from "./SetDefinition";

const Clearline7 = new SetDefinition(
  {
    primary: "#3B82F6",
    secondary: "#60A5FA",
    accent: "#06B6D4",
    success: "#10B981",
    bg: "#FFFFFF",
    card: "#F9FAFB",
    text: "#111827",
    muted: "#6B7280",
    border: "#D1D5DB",
  },
  {
    bodyFont: "Inter",
    bodyFallback: "SF Pro, Open Sans, Roboto",
    headingFont: "Inter",
    monoFont: "JetBrains Mono",
    bodySize: "16px",
    h1Size: "32px",
    h2Size: "24px",
    h3Size: "20px",
    h4Size: "18px",
    h5Size: "16px",
    h6Size: "16px",
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
    paragraphAfter: "16px (12pt)",
    bulletIndent: "0.25″",
  },
  {
    button: "4px",
    card: "8px",
    input: "6px",
  },
  {
    low: "0 1px 2px rgba(0,0,0,0.05)",
    medium: "0 2px 4px rgba(0,0,0,0.08)",
    high: "0 4px 8px rgba(0,0,0,0.1)",
  }
);

export default Clearline7;
