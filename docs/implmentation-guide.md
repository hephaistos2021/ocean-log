# ocean-log: Astro + Tailwind Implementation Guide

## Project Overview

Build a personal developer blog called "ocean-log" using Astro and Tailwind CSS. The design follows a "geek/terminal meets deep ocean" aesthetic — monospace fonts, terminal-inspired UI patterns, dark theme with blue/green accents, and subtle animated wave backgrounds.

**Tech Stack:**
- Astro v5.x (with SSG)
- Tailwind CSS v4.x
- TypeScript
- MDX for blog posts
- View Transitions API
- Shadcn ui

---

## Phase 1: Project Setup

### 1.1 Initialize Astro Project
- [x] Create new Astro project: `npm create astro@latest ocean-log`
- [x] Select: Empty template, TypeScript (strict), install dependencies
- [x] Install Tailwind CSS: `npx astro add tailwind`
- [x] Install MDX integration: `npx astro add mdx`

### 1.2 Configure Tailwind
- [x] Add JetBrains Mono font via Fontsource: `bun add @fontsource/jetbrains-mono`
- [x] Configure custom colors in `src/styles/global.css` using Tailwind v4 syntax:
  ```css
  @theme inline {
    /* Ocean theme colors */
    --color-ocean-bg: #0d1117;
    --color-ocean-surface: #161b22;
    --color-ocean-hover: #1f2428;
    --color-ocean-border: #30363d;
    --color-ocean-border-subtle: #21262d;
    --color-text-primary: #c9d1d9;
    --color-text-secondary: #8b949e;
    --color-text-muted: #484f58;
    --color-accent-blue: #58a6ff;
    --color-accent-green: #7ee787;
    --color-accent-green-dark: #238636;

    /* Font families */
    --font-family-mono: 'JetBrains Mono', monospace;
  }
  ```
- [x] Add custom animations (float, fadeInUp, blink) using @keyframes
- [x] Set default font-family to mono in @layer base styles

### 1.3 Project Structure
- [x] Create folder structure:
  ```
  src/
  ├── components/
  │   ├── Navigation.astro
  │   ├── Hero.astro
  │   ├── PostList.astro
  │   ├── PostCard.astro
  │   ├── Newsletter.astro
  │   ├── Footer.astro
  │   ├── TerminalWindow.astro
  │   ├── WaveBackground.astro
  │   ├── FloatingParticles.astro
  │   └── BlinkingCursor.astro
  ├── layouts/
  │   ├── BaseLayout.astro
  │   └── PostLayout.astro
  ├── pages/
  │   ├── index.astro
  │   ├── posts/
  │   │   └── [...slug].astro
  │   ├── about.astro
  │   └── rss.xml.js
  ├── content/
  │   └── posts/
  │       └── (MDX files)
  └── styles/
      └── global.css
  ```

---

## Phase 2: Core Components

### 2.1 WaveBackground.astro
- [ ] Create SVG wave animation component
- [ ] Two wave paths with different durations (20s, 25s)
- [ ] Use linearGradient with blue (#58a6ff) and green (#39d353)
- [ ] Set opacity to 0.06 for subtle effect
- [ ] Position: fixed, full viewport, pointer-events-none, z-0

### 2.2 FloatingParticles.astro
- [ ] Generate 12-15 small circles (1-3px)
- [ ] Alternate colors between accent-blue and accent-green
- [ ] Random positions using inline styles
- [ ] Apply float animation with random delays (18-30s duration)
- [ ] Opacity range: 0.1 - 0.4

### 2.3 BlinkingCursor.astro
- [ ] Accept `visible` prop or use client-side JS
- [ ] Display underscore `_` character
- [ ] Toggle opacity every 530ms
- [ ] Color: accent-blue

### 2.4 Navigation.astro
- [ ] Left side: `~/ocean-log` path-style logo
- [ ] Right side: links with keyboard hints
  - posts [p]
  - about [a]
  - rss [r]
- [ ] Scroll detection: add backdrop blur + border when scrolled
- [ ] Use `<script>` tag for scroll listener (vanilla JS)
- [ ] Transitions: all 0.4s ease

### 2.5 TerminalWindow.astro
- [ ] Props: `title` (string)
- [ ] Header with traffic light buttons (red/yellow/green circles)
- [ ] Slot for content
- [ ] Border radius: 6px
- [ ] Background: ocean-surface
- [ ] Border: ocean-border

### 2.6 Hero.astro
- [ ] Comment line: `// a developer's journey`
- [ ] Title: `ocean-log` with blinking cursor
- [ ] "ocean" in accent-blue, "-" in muted, "log" in primary
- [ ] Subtitle in Korean (muted color)
- [ ] CTA button: `$ cd ./posts` style
- [ ] Scroll indicator at bottom: `↓ scroll`
- [ ] FadeInUp animations with staggered delays

### 2.7 PostList.astro
- [ ] Section header: `→ ls -la ./posts`
- [ ] Wrap posts in TerminalWindow component
- [ ] Each post row displays:
  - Index (01, 02...) in blue
  - Date (YYYY-MM-DD) in muted
  - Title in primary
  - Tag (#tag) in green
- [ ] Hover effect: background change to ocean-hover
- [ ] "git log --all" link at bottom

### 2.8 Newsletter.astro
- [ ] JSDoc style header comment
- [ ] Title: 깊은 바다의 소식
- [ ] Description text
- [ ] Input with arrow prompt (→)
- [ ] Subscribe button (green)
- [ ] Success state with checkmark
- [ ] Consider: Astro Action or external service integration

### 2.9 Footer.astro
- [ ] Left: `~/ocean-log • v1.0.0`
- [ ] Right: `@github`, `@twitter` links
- [ ] Top border: ocean-border-subtle
- [ ] Minimal padding

---

## Phase 3: Layouts

### 3.1 BaseLayout.astro
- [ ] HTML boilerplate with lang, meta tags
- [ ] Import global CSS
- [ ] Include WaveBackground and FloatingParticles
- [ ] Include Navigation
- [ ] Slot for page content
- [ ] Include Footer
- [ ] Add View Transitions: `<ViewTransitions />`

### 3.2 PostLayout.astro
- [ ] Extends BaseLayout
- [ ] Props: title, date, tags, readingTime
- [ ] Post header with meta info
- [ ] Prose styling for MDX content
- [ ] Back link: `← cd ..`
- [ ] Related posts or next/prev navigation (optional)

---

## Phase 4: Pages

### 4.1 index.astro
- [ ] Use BaseLayout
- [ ] Include Hero component
- [ ] Include PostList with recent 5 posts
- [ ] Include Newsletter component

### 4.2 posts/[...slug].astro
- [ ] Use getStaticPaths with content collections
- [ ] Use PostLayout
- [ ] Render MDX content
- [ ] Generate OG images (optional)

### 4.3 about.astro
- [ ] Personal introduction
- [ ] Terminal-style bio display
- [ ] Skills/interests as tags
- [ ] Social links

### 4.4 rss.xml.js
- [ ] Generate RSS feed from posts
- [ ] Include title, description, items

---

## Phase 5: Content Setup

### 5.1 Content Collections
- [ ] Define posts collection in `src/content/config.ts`
- [ ] Schema: title, date, tags, description, draft
- [ ] Create sample posts in MDX format

### 5.2 MDX Styling
- [ ] Configure prose styles for post content
- [ ] Code block styling (match terminal theme)
- [ ] Custom components: Callout, CodeBlock, etc.

---

## Phase 6: Enhancements

### 6.1 SEO & Meta
- [ ] Dynamic meta tags per page
- [ ] Open Graph images
- [ ] Sitemap generation
- [ ] robots.txt

### 6.2 Performance
- [ ] Optimize fonts (subset, preload)
- [ ] Lazy load images
- [ ] Minimize CSS/JS

### 6.3 Accessibility
- [ ] Keyboard navigation support
- [ ] Focus styles
- [ ] Screen reader friendly labels
- [ ] Color contrast check (especially muted text)

### 6.4 Deployment
- [ ] Configure for Vercel/Netlify/Cloudflare Pages
- [ ] Set up environment variables if needed
- [ ] Configure custom domain

---

## Design Reference

Refer to the `ocean-log-design-system` skill for:
- Complete color palette
- Typography specs
- Component patterns
- Animation details
- UI copy style guidelines

---

## Notes for Implementation

1. **Monospace everywhere**: The entire site uses JetBrains Mono. No exceptions.

2. **Terminal metaphors**: Use command-line language in UI copy:
   - Navigation feels like directory browsing
   - Actions feel like commands
   - Comments use `//` or `/* */` syntax

3. **Subtle animations**: Waves and particles should be barely noticeable — atmospheric, not distracting.

4. **Color restraint**: Primary content in #c9d1d9, use blue/green accents sparingly for links and highlights only.

5. **Korean + English mix**: Korean for content/descriptions, English for UI chrome and commands.