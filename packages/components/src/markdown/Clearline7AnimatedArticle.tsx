import React, { useEffect, useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@clearline7/theme";
import { Clearline7 } from "@clearline7/set-definitions";

import {
  H1, H2, H3, Paragraph, Blockquote, Code,
  List, ListItem, Card, Button
} from "../index";

interface MarkdownRendererProps {
  url: string;
}

interface Subsection {
  id: string;
  title: string;
  content: string[];
}

interface Section {
  id: string;
  title: string;
  content: string[];
  subsections: Subsection[];
}

// Animate collapse
const Collapsible = ({ title, children, level = 2, id }: { title: string, children: React.ReactNode, level?: number, id: string }) => {
  const [open, setOpen] = useState(true);

  // Determine arrow style
  const arrow = open ? "▼" : "▶";

  // Header component mapping based on level
  const Header = level === 2 ? H2 : H3;

  return (
    <Card style={{ margin: "16px 0", padding: "16px", borderRadius: "12px" }}>
      <Button
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: "none",
          padding: 0,
          marginBottom: "12px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        <Header id={id} style={{ marginBottom: 0 }}>
          {title} {arrow}
        </Header>
      </Button>
      <div
        style={{
          maxHeight: open ? "1000px" : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
    </Card>
  );
};

// Spacing helpers
const H1Spacer = ({ children }: { children?: React.ReactNode }) => <H1 style={{ marginBottom: "24px" }}>{children}</H1>;
const ParagraphSpacer = ({ children }: { children?: React.ReactNode }) => <Paragraph style={{ marginBottom: "12px" }}>{children}</Paragraph>;
const H3Spacer = ({ children }: { children?: React.ReactNode }) => <H3 style={{ marginBottom: "12px" }}>{children}</H3>;
const ListSpacer = ({ children, ordered }: { children: React.ReactNode, ordered?: boolean }) => <List ordered={ordered} style={{ marginBottom: "12px" }}>{children}</List>;
const ListItemSpacer = ({ children }: { children?: React.ReactNode }) => <ListItem>{children}</ListItem>;
const CodeBlock = ({ inline, children }: { inline?: boolean, children: React.ReactNode }) => <Code inline={inline} style={{ fontSize: inline ? "0.95em" : "1em" }}>{children}</Code>;
const BlockquoteSpacer = ({ children }: { children?: React.ReactNode }) => <Blockquote style={{ margin: "16px 0" }}>{children}</Blockquote>;

// Parse markdown into hierarchical sections
function parseSections(markdown: string): Section[] {
  const lines = markdown.split("\n");
  const sections: Section[] = [];
  let currentSection: Section | null = null;
  let subsection: Subsection | null = null;

  lines.forEach((line, idx) => {
    if (line.startsWith("## ")) {
      if (currentSection) sections.push(currentSection);
      currentSection = { id: `sec-${idx}`, title: line.replace("## ", "").trim(), content: [], subsections: [] };
      subsection = null;
    } else if (line.startsWith("### ")) {
      if (subsection && currentSection) currentSection.subsections.push(subsection);
      subsection = { id: `sub-${idx}`, title: line.replace("### ", "").trim(), content: [] };
    } else {
      if (subsection) subsection.content.push(line);
      else if (currentSection) currentSection.content.push(line);
    }
  });

  if (subsection && currentSection) (currentSection as Section).subsections.push(subsection);
  if (currentSection) sections.push(currentSection);

  return sections;
}

export default function Clearline7AnimatedArticle({ url }: MarkdownRendererProps) {
  const [content, setContent] = useState("");
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch markdown file");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setSections(parseSections(text));
      })
      .catch((err) => console.error("Markdown fetch error:", err));
  }, [url]);

  // ReactMarkdown components mapping
  const markdownComponents: any = {
    h1: H1Spacer,
    h2: H2,
    h3: H3Spacer,
    p: ParagraphSpacer,
    ul: ListSpacer,
    ol: ({ children }: any) => <ListSpacer ordered>{children}</ListSpacer>,
    li: ListItemSpacer,
    code: (props: any) => <CodeBlock {...props} />,
    blockquote: BlockquoteSpacer,
  };

  // Render all sections with H2/H3 collapsible
  const renderSections = () =>
    sections.map((sec, idx) => (
      <Collapsible key={sec.id} title={`${idx + 1}. ${sec.title}`} level={2} id={sec.id}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents as any}>
          {sec.content.join("\n")}
        </ReactMarkdown>
        {sec.subsections.map((sub, subIdx) => (
          <Collapsible key={sub.id} title={`${idx + 1}.${subIdx + 1} ${sub.title}`} level={3} id={sub.id}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents as any}>
              {sub.content.join("\n")}
            </ReactMarkdown>
          </Collapsible>
        ))}
      </Collapsible>
    ));

  return (
    <ThemeProvider setDefinition={Clearline7}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        {renderSections()}
      </div>
    </ThemeProvider>
  );
}
