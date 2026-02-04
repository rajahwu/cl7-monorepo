// MarkdownRenderer.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@clearline7/theme";
import { Clearline7 } from "@clearline7/set-definitions";

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem, Card
} from "@clearline7/components";

// Map markdown elements to Clearline7 components
const markdownComponents = {
  h1: ({ children }) => <H1>{children}</H1>,
  h2: ({ children }) => <H2>{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  code: ({ inline, children }) => <Code inline={inline}>{children}</Code>,
  ul: ({ children }) => <List>{children}</List>,
  ol: ({ children }) => <List ordered>{children}</List>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
};

export default function MarkdownRenderer({ url }) {
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
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </ThemeProvider>
  );
}
