# Leytzher Muro

An Astro publication for Markdown articles with LaTeX, syntax-highlighted code, and interactive graphics.

## Commands

Run these from the project directory:

| Command | Action |
| --- | --- |
| `bun install` | Install dependencies |
| `bun run dev` | Start the local site at `localhost:4321` |
| `bun run build` | Build the production site into `dist/` |
| `bun run preview` | Preview the production build locally |

## Writing Articles

Articles live in `src/content/articles/`. Add frontmatter and write the body in Markdown:

~~~md
---
title: A new field note
description: A short summary for the article header.
author: Lea Thompson
pubDate: 2025-05-14
readTime: 6 min read
tags:
  - Computing
status: draft
---

Inline math looks like $f(x) = \sin(x)$.

```python
print("hello from a cell")
```
~~~

Fenced code blocks are automatically styled and enhanced with run, output, and graphics controls. The current browser adapter demonstrates Python, Julia, JavaScript/D3, Common Lisp, and Quicklisp. Real Python, Julia, and Lisp execution can be connected to their respective runtimes without changing article syntax.

Use `status: published` when a note should appear in the archive and receive a public `/articles/<slug>` URL. Leave it as `status: draft` while writing; drafts are excluded from the archive and are not generated as public routes.

# Before committing changes
```
bun run build
```