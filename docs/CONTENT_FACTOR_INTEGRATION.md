# Content Factor Integration - Reference

> Linking the Content Factor capture/pipeline system with Clearline7 documentation output

## Overview

Content Factor is the **capture + processing engine** that feeds into the CL7 style system. It handles:

- Task capture (screenshots, audio, notes, diagrams)
- Asset processing and indexing
- VSM (Visual Skill Memory) page generation
- Skill artifact creation

Clearline7 provides the **output formatting layer**:

- Style Sets define how captured content is presented
- Generators export to Word, PDF, Markdown
- Components render content in web apps

---

## Source Documentation

### Perplexity Spec - CL7 Style Guide

**"Version Zero" Unified Style Guide Outline**
https://www.perplexity.ai/search/style-guide-outline-revised-cr-HOveI3mjSii5Hicfuf1WLQ#0

### Content Factor Repo

**GitHub:** `dropframe-studio/content-factor`
**Local:** `03_Projects/04_content-factor/content-factor/`

Key files:

- `README.md` — Full project overview
- `pipeline/` — Capture, transform, publish, measure scripts
- `templates/` — Content blueprints (BuildLog, ProgressSnapshot, etc.)
- `TODO.md` — Implementation roadmap

---

## The Hybrid Capture Model

### You Control

- When a task starts
- What theme/objective it has
- When it ends

### System Controls

- Folder creation
- Naming conventions
- Indexing
- Manifest + VSM generation
- Asset processing

---

## Task Lifecycle

### 1. Declare Task

```
TASK-ID: CL7-PIPE
TITLE: ClearLine7 + Pipeline Activation
```

### 2. Auto-Created Structure

```
pipeline/artifacts/2025-12-03_CL7-PIPE/
   screenshots/
   audio/
   notes/
   logs/
   diagrams/
   manifest.json
```

### 3. Manifest Schema

```json
{
  "task_id": "CL7-PIPE",
  "date": "2025-12-03",
  "title": "ClearLine7 + Pipeline Activation",
  "status": "active",
  "artifacts": {
    "screenshots": [],
    "audio": [],
    "notes": [],
    "diagrams": []
  }
}
```

### 4. Naming Convention

```
[YYYY-MM-DD]_[TASK-ID]_[TYPE]_[###]_[SLUG].[ext]
```

Examples:

```
2025-12-03_CL7-PIPE_SCREEN_001_terminal-error.png
2025-12-03_CL7-PIPE_AUDIO_001_pipeline-notes.m4a
2025-12-03_CL7-PIPE_JOURNAL_001.md
2025-12-03_CL7-PIPE_FLOW_001_architecture.png
```

### 5. End Task Processing

```bash
pnpm capture:end
```

Triggers:

- Final snapshot
- Asset compression/versioning
- Copy to `publish/vsm/{task-id}/`
- Update global index
- Make available to web app

---

## Folder Mapping

| Content Factor Folder      | Purpose                         | CL7 Integration     |
| -------------------------- | ------------------------------- | ------------------- |
| `pipeline/artifacts/`      | Raw capture layer               | Source data         |
| `publish/vsm/`             | Permanent memory                | Generator input     |
| `web_app/public/captures/` | Read-only consumption           | Preview app         |
| `templates/`               | VSM + Content Factor blueprints | Style Set templates |
| `docs/`                    | Human-readable memory           | Style Guide content |

---

## Storage Architecture

| Storage Type                  | Role                  |
| ----------------------------- | --------------------- |
| Cloud bucket (S3/R2/Supabase) | Source of truth       |
| Local folder                  | Active session        |
| Repo `publish/`               | Versioned output      |
| Web App                       | Read-only consumption |

---

## Integration Points with CL7

### 1. VSM Page Generation

Content Factor captures → CL7 generators format output

```
capture → manifest.json → generator → page.md (styled with CL7)
```

### 2. Style Set Selection

Each VSM page can specify which Style Set to use:

```json
{
  "task_id": "CL7-PIPE",
  "style_set": "TechDocs",
  "output_format": ["markdown", "docx"]
}
```

### 3. Component Rendering

Web app uses CL7 components to display captured content:

```tsx
<SetDefinitionProvider setDefinition={TechDocs}>
  <VSMPage manifest={manifest} />
</SetDefinitionProvider>
```

---

## Next Steps

### For Content Factor

- [ ] Implement `pnpm capture:start` command
- [ ] Implement `pnpm capture:end` command
- [ ] Create manifest auto-generation
- [ ] Set up cloud bucket sync

### For CL7 Integration

- [ ] Create VSM page template in generators
- [ ] Add manifest-to-page transformer
- [ ] Connect preview app to captures folder
- [ ] Test end-to-end pipeline

---

## Related Repos

| Project        | Path                                     | Purpose                 |
| -------------- | ---------------------------------------- | ----------------------- |
| CL7 Monorepo   | `02_style-system/clearline/cl7-monorepo` | Style system            |
| Content Factor | `04_content-factor/content-factor`       | Capture/pipeline system |
| VSM School     | `01_vsm-school`                          | Learning platform       |
| Grindline      | `07_grindline`                           | Workflow automation     |

---

## The Vision

> **A second brain that generates skill pages from lived experience**

Not docs. Not notes. **Skill artifacts.**

Content Factor captures the work.
Clearline7 presents it beautifully.
VSM School makes it teachable.
