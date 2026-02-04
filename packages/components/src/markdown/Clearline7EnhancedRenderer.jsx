// EnhancedMarkdownRenderer.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@clearline7/theme";
import { Clearline7 } from "@clearline7/set-definitions";

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem, Card
} from "@clearline7/components";

// Wrapper to render h2 inside a Card with spacing
const H2Card = ({ children }) => (
  <Card style={{ margin: "24px 0", padding: "16px" }}>
    <H2>{children}</H2>
  </Card>
);

// Wrapper to add spacing after H1
const H1Spacer = ({ children }) => (
  <H1 style={{ marginBottom: "16px" }}>{children}</H1>
);

// Wrapper to add spacing after H3
const H3Spacer = ({ children }) => (
  <H3 style={{ marginBottom: "12px" }}>{children}</H3>
);

// Minimal inline styling for code blocks
const CodeBlock = ({ inline, children }) => (
  <Code inline={inline} style={{ fontSize: inline ? "0.95em" : "1em" }}>
    {children}
  </Code>
);

// Map markdown elements to Clearline7 components
const markdownComponents = {
  h1: H1Spacer,
  h2: H2Card,
  h3: H3Spacer,
  p: ({ children }) => <Paragraph style={{ marginBottom: "12px" }}>{children}</Paragraph>,
  blockquote: ({ children }) => <Blockquote style={{ margin: "16px 0" }}>{children}</Blockquote>,
  code: CodeBlock,
  ul: ({ children }) => <List style={{ marginBottom: "12px" }}>{children}</List>,
  ol: ({ children }) => <List ordered style={{ marginBottom: "12px" }}>{children}</List>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
};

export default function EnhancedMarkdownRenderer({ url }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch markdown file");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => console.error("Markdown fetch error:", err));
  }, [url]);

  return (
    <ThemeProvider setDefinition={Clearline7}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>
    </ThemeProvider>
  );
}
