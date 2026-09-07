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

## GitHub Pages

The repository includes [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Bun and deploys `dist/` through GitHub Pages whenever `master` receives a push. The committed [`public/CNAME`](public/CNAME) configures `leytzher.com` as the custom domain.

1. Create a GitHub repository and push this project to its `master` branch.
2. In **Settings > Pages**, set **Source** to **GitHub Actions**.
3. At your DNS provider, point the apex domain to GitHub Pages with these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add a `www` CNAME pointing to your GitHub Pages hostname if you want `www.leytzher.com` to work too.
5. After the first successful workflow run, return to **Settings > Pages**, confirm `leytzher.com`, and enable **Enforce HTTPS** once the certificate is issued.

GitHub Pages may take a few minutes to issue the certificate and propagate DNS changes.

## Project Structure

```text
/
├── public/
│   └── CNAME
├── src/
│   ├── content.config.ts
│   ├── content/
│   │   └── articles/
│   └── pages/
│       └── index.astro
└── .github/
    └── workflows/
        └── deploy.yml
```

Astro looks for `.astro` pages and Markdown content in `src/`. Static assets belong in `public/`.
