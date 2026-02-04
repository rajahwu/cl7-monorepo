import React, { useEffect, useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@clearline7/theme";
import { Clearline7 } from "@clearline7/set-definitions";

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem, Card
} from "../index";

interface MarkdownRendererProps {
  url: string;
}

// Wrapper for H2 sections inside a Card
const SectionCard = ({ children }: { children?: React.ReactNode }) => (
  <Card style={{ margin: "24px 0", padding: "20px", borderRadius: "12px" }}>
    {children}
  </Card>
);

// Simple H1 spacing
const H1Spacer = ({ children }: { children?: React.ReactNode }) => <H1 style={{ marginBottom: "20px" }}>{children}</H1>;
const H3Spacer = ({ children }: { children?: React.ReactNode }) => <H3 style={{ marginBottom: "12px" }}>{children}</H3>;

// Code styling
const CodeBlock = ({ inline, children }: { inline?: boolean, children: React.ReactNode }) => (
  <Code inline={inline} style={{ fontSize: inline ? "0.95em" : "1em" }}>
    {children}
  </Code>
);

// Paragraph spacing
const ParagraphSpacer = ({ children }: { children?: React.ReactNode }) => (
  <Paragraph style={{ marginBottom: "12px" }}>{children}</Paragraph>
);

// List spacing
const ListSpacer = ({ children, ordered }: { children: React.ReactNode, ordered?: boolean }) => (
  <List ordered={ordered} style={{ marginBottom: "12px" }}>
    {children}
  </List>
);
const ListItemSpacer = ({ children }: { children?: React.ReactNode }) => <ListItem>{children}</ListItem>;

// Main component
export default function Clearline7ArticleRenderer({ url }: MarkdownRendererProps) {
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

  // Components mapping for ReactMarkdown
  const markdownComponents: any = {
    h1: H1Spacer,
    h2: ({ children }: any) => <SectionCard><H2>{children}</H2></SectionCard>,
    h3: H3Spacer,
    p: ParagraphSpacer,
    blockquote: ({ children }: any) => <Blockquote style={{ margin: "16px 0" }}>{children}</Blockquote>,
    code: (props: any) => <CodeBlock {...props} />,
    ul: ({ children }: any) => <ListSpacer>{children}</ListSpacer>,
    ol: ({ children }: any) => <ListSpacer ordered>{children}</ListSpacer>,
    li: ListItemSpacer,
  };

  return (
    <ThemeProvider setDefinition={Clearline7}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents as any}>
          {content}
        </ReactMarkdown>
      </div>
    </ThemeProvider>
  );
}
