import React, { useEffect, useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@clearline7/theme";
import { Clearline7 } from "@clearline7/set-definitions";

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem
} from "../index";

interface MarkdownRendererProps {
  url: string;
}

// Map markdown elements to Clearline7 components
const markdownComponents: any = {
  h1: ({ children }: any) => <H1>{children}</H1>,
  h2: ({ children }: any) => <H2>{children}</H2>,
  h3: ({ children }: any) => <H3>{children}</H3>,
  p: ({ children }: any) => <Paragraph>{children}</Paragraph>,
  blockquote: ({ children }: any) => <Blockquote>{children}</Blockquote>,
  code: ({ inline, children }: any) => <Code inline={inline}>{children}</Code>,
  ul: ({ children }: any) => <List>{children}</List>,
  ol: ({ children }: any) => <List ordered>{children}</List>,
  li: ({ children }: any) => <ListItem>{children}</ListItem>,
};

export default function Clearline7Renderer({ url }: MarkdownRendererProps) {
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
        components={markdownComponents as any}
      >
        {content}
      </ReactMarkdown>
    </ThemeProvider>
  );
}
