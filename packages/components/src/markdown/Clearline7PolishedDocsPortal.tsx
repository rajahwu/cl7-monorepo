import React, { useEffect, useMemo, useRef, useState } from "react";
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

interface SubSection {
  id: string;
  title: string;
  content: string[];
}

interface Section {
  id: string;
  title: string;
  content: string[];
  subs: SubSection[];
}


// ---------- Helpers ----------

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^\w]+/g, "-");

function parseSections(markdown: string): Section[] {
  const lines = markdown.split("\n");
  const sections: Section[] = [];

  let current: Section = { id: "intro", title: "Introduction", content: [], subs: [] };
  let sub: SubSection | null = null;

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      sections.push(current);
      current = {
        id: slugify(line),
        title: line.replace("## ", "").trim(),
        content: [],
        subs: []
      };
      sub = null;
    } else if (line.startsWith("### ")) {
      if (sub) current.subs.push(sub);
      sub = {
        id: slugify(line),
        title: line.replace("### ", "").trim(),
        content: []
      };
    } else {
      if (sub) sub.content.push(line);
      else current.content.push(line);
    }
  });

  if (sub) current.subs.push(sub);
  sections.push(current);

  return sections;
}


// ---------- Markdown component mapping ----------

const mdComponents: any = {
  h1: ({ children }: any) => <H1 style={{ marginBottom: 24 }}>{children}</H1>,
  h2: ({ children, ...props }: any) => <H2 {...props} style={{ marginTop: 12 }}>{children}</H2>,
  h3: ({ children }: any) => <H3 style={{ marginTop: 8 }}>{children}</H3>,
  p: ({ children }: any) => <Paragraph style={{ marginBottom: 12 }}>{children}</Paragraph>,
  ul: ({ children }: any) => <List style={{ marginBottom: 12 }}>{children}</List>,
  ol: ({ children }: any) => <List ordered style={{ marginBottom: 12 }}>{children}</List>,
  li: ({ children }: any) => <ListItem>{children}</ListItem>,
  blockquote: ({ children }: any) => <Blockquote style={{ margin: "16px 0" }}>{children}</Blockquote>,
  code: ({ inline, children }: any) => <Code inline={inline}>{children}</Code>,
};


// ---------- Collapsible ----------

const Collapsible = ({ title, id, level, children }: { title: string, id: string, level: number, children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  const Header = level === 2 ? H2 : H3;

  return (
    <Card style={{ marginBottom: 16, padding: 16, scrollMarginTop: 100 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        <Header id={id}>
          {title} {open ? "▼" : "▶"}
        </Header>
      </div>
      <div
        style={{
          maxHeight: open ? 2000 : 0,
          overflow: "hidden",
          transition: "all 0.25s ease",
        }}
      >
        {children}
      </div>
    </Card>
  );
};


// ---------- Main Portal ----------

export default function Clearline7PolishedDocsPortal({ url }: MarkdownRendererProps) {
  const [markdown, setMarkdown] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState("");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.text())
      .then((t) => {
        setMarkdown(t);
        setSections(parseSections(t));
      });
  }, [url]);

  // Scroll spy
  useEffect(() => {
    const ids = sections.flatMap((s) => [
      s.id,
      ...s.subs.map((x) => x.id),
    ]);

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el && observer.current) observer.current.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [sections]);

  const filtered = useMemo(() => {
    if (!search) return sections;
    return sections.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sections]);

  const theme = useMemo(() => {
    if (!dark) return Clearline7;
    return {
      ...Clearline7,
      colors: {
        ...Clearline7.colors,
        bg: "#0f172a",
        card: "#111827",
        text: "#e5e7eb",
        muted: "#9ca3af",
        border: "#374151",
      },
    } as typeof Clearline7;
  }, [dark]);

  return (
    <ThemeProvider setDefinition={theme}>
      <div style={{ display: "flex", padding: 24, gap: 24 }}>

        {/* Sidebar */}
        <aside
          style={{
            width: mobileOpen ? 240 : 0,
            overflow: "hidden",
            transition: "width .25s ease",
          }}
        >
          <Card style={{ padding: 16, position: "sticky", top: 24 }}>
            <H2>Contents</H2>

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: 8,
                marginBottom: 12,
                borderRadius: 6,
              }}
            />

            <ul style={{ paddingLeft: 16 }}>
              {filtered.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    style={{
                      textDecoration: "none",
                      fontWeight: active === s.id ? "bold" : "normal",
                    }}
                  >
                    {s.title}
                  </a>
                  <ul style={{ paddingLeft: 16 }}>
                    {s.subs.map((x) => (
                      <li key={x.id}>
                        <a
                          href={`#${x.id}`}
                          style={{
                            textDecoration: "none",
                            fontWeight: active === x.id ? "bold" : "normal",
                          }}
                        >
                          {x.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Card>
        </aside>

        {/* Content */}
        <main style={{ flex: 1 }}>
          <div style={{ marginBottom: 16, display: "flex", gap: 12 }}>
            <Button onClick={() => setMobileOpen(!mobileOpen)}>
              ☰ Menu
            </Button>
            <Button onClick={() => setDark(!dark)}>
              {dark ? "Light" : "Dark"} Mode
            </Button>
          </div>

          {sections.map((s, i) => (
            <Collapsible
              key={s.id}
              id={s.id}
              level={2}
              title={`${i + 1}. ${s.title}`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents as any}>
                {s.content.join("\n")}
              </ReactMarkdown>

              {s.subs.map((x, j) => (
                <Collapsible
                  key={x.id}
                  id={x.id}
                  level={3}
                  title={`${i + 1}.${j + 1} ${x.title}`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents as any}>
                    {x.content.join("\n")}
                  </ReactMarkdown>
                </Collapsible>
              ))}
            </Collapsible>
          ))}
        </main>
      </div>
    </ThemeProvider>
  );
}
