import SetDefinition from "./SetDefinition.js";

const BlogPosts = new SetDefinition(
  {
    primary: "#1A1A1A",
    secondary: "#333333",
    accent: "#0066CC",
    success: "#16A34A",
    bg: "#FFFFFF",
    card: "#F8F9FA",
    text: "#2C2C2C",
    muted: "#666666",
    border: "#E0E0E0",
  },
  {
    bodyFont: "Georgia",
    bodyFallback: "Merriweather, Times New Roman",
    headingFont: "SF Pro",
    monoFont: "Menlo",
    bodySize: "16px",
    h1Size: "36px",
    h2Size: "28px",
    h3Size: "22px",
    h4Size: "18px",
    h5Size: "16px",
    h6Size: "16px",
    lineHeightNormal: 1.6,
    lineHeightTight: 1.4,
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
    paragraphBefore: "16px (12pt)",
    paragraphAfter: "16px (12pt)",
    bulletIndent: "0.25″",
  },
  {
    button: "6px",
    card: "8px",
    input: "6px",
  },
  {
    low: "0 1px 3px rgba(0,0,0,0.05)",
    medium: "0 2px 6px rgba(0,0,0,0.08)",
    high: "0 4px 12px rgba(0,0,0,0.1)",
  }
);

export default BlogPosts;
