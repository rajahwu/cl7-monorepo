// Clearline7InteractiveArticle.jsx
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@clearline7/theme";
import { Clearline7 } from "@clearline7/set-definitions";

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem, Card, Button
} from "@clearline7/components";

// H2 Section with collapsible content
const CollapsibleSection = ({ title, children, id }) => {
  const [open, setOpen] = useState(true);

  return (
    <Card style={{ margin: "24px 0", padding: "16px", borderRadius: "12px" }}>
      <Button
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          marginBottom: "12px",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        <H2 id={id} style={{ marginBottom: 0 }}>
          {title} {open ? "▼" : "▶"}
        </H2>
      </Button>
      {open && <div style={{ marginTop: "12px" }}>{children}</div>}
    </Card>
  );
};

// Spacing helpers
const H1Spacer = ({ children }) => <H1 style={{ marginBottom: "24px" }}>{children}</H1>;
const H3Spacer = ({ children }) => <H3 style={{ marginBottom: "12px" }}>{children}</H3>;
const ParagraphSpacer = ({ children }) => (
  <Paragraph style={{ marginBottom: "12px" }}>{children}</Paragraph>
);
const ListSpacer = ({ children, ordered }) => (
  <List ordered={ordered} style={{ marginBottom: "12px" }}>{children}</List>
);
const ListItemSpacer = ({ children }) => <ListItem>{children}</ListItem>;
const CodeBlock = ({ inline, children }) => (
  <Code inline={inline} style={{ fontSize: inline ? "0.95em" : "1em" }}>{children}</Code>
);
const BlockquoteSpacer = ({ children }) => (
  <Blockquote style={{ margin: "16px 0" }}>{children}</Blockquote>
);

// Main renderer
export default function Clearline7InteractiveArticle({ url }) {
  const [content, setContent] = useState("");
  const [sections, setSections] = useState([]);

  // Fetch markdown
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

  // Parse sections for TOC (H2 headers)
  useEffect(() => {
    if (!content) return;
    const lines = content.split("\n");
    const h2s = [];
    lines.forEach((line, idx) => {
      if (line.startsWith("## ")) {
        const title = line.replace("## ", "").trim();
        const id = `section-${idx}`;
        h2s.push({ title, id });
      }
    });
    setSections(h2s);
  }, [content]);

  // Render markdown inside H2 collapsible sections
  const renderMarkdownWithSections = () => {
    if (!sections.length) return <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{content}</ReactMarkdown>;

    const parts = [];
    let lastIndex = 0;

    sections.forEach((sec, i) => {
      const nextIndex = content.indexOf(`## ${sec.title}`, lastIndex);
      const nextNextIndex = i + 1 < sections.length
        ? content.indexOf(`## ${sections[i + 1].title}`, nextIndex)
        : content.length;

      const sectionContent = content.slice(nextIndex + (`## ${sec.title}`).length, nextNextIndex).trim();
      parts.push(
        <CollapsibleSection key={sec.id} title={sec.title} id={sec.id}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {sectionContent}
          </ReactMarkdown>
        </CollapsibleSection>
      );

      lastIndex = nextNextIndex;
    });

    // Optional: include content before the first H2
    const preContent = content.slice(0, content.indexOf(`## ${sections[0].title}`)).trim();
    if (preContent) {
      parts.unshift(
        <ReactMarkdown key="preContent" remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {preContent}
        </ReactMarkdown>
      );
    }

    return parts;
  };

  // Components mapping
  const markdownComponents = {
    h1: H1Spacer,
    h2: ({ children }) => <H2>{children}</H2>, // will be wrapped in CollapsibleSection
    h3: H3Spacer,
    p: ParagraphSpacer,
    ul: ListSpacer,
    ol: ({ children }) => <ListSpacer ordered>{children}</ListSpacer>,
    li: ListItemSpacer,
    code: CodeBlock,
    blockquote: BlockquoteSpacer,
  };

  // Generate TOC
  const toc = sections.map((s) => (
    <li key={s.id} style={{ marginBottom: "6px" }}>
      <a href={`#${s.id}`} style={{ textDecoration: "none", color: Clearline7.colors.accent }}>
        {s.title}
      </a>
    </li>
  ));

  return (
    <ThemeProvider setDefinition={Clearline7}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        {/* Optional TOC */}
        {toc.length > 0 && (
          <Card style={{ marginBottom: "24px", padding: "16px" }}>
            <H2>Table of Contents</H2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>{toc}</ul>
          </Card>
        )}
        {renderMarkdownWithSections()}
      </div>
    </ThemeProvider>
  );
}
