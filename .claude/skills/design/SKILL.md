---
name: ocean-log-design-system
description: Design system and style guide for "ocean-log" developer blog. A geek/terminal-inspired aesthetic combining deep ocean themes with developer culture. Use this skill when building or styling the ocean-log blog, creating new components, or ensuring design consistency across pages. Applies to: landing pages, blog posts, newsletter sections, navigation, and all UI components.
---

# ocean-log Design System

A developer blog design system that merges ocean/water themes with terminal/code editor aesthetics. The vibe is "indie hacker meets deep sea" — technically geeky but with calm, atmospheric depth.

## Core Concept

- **Theme**: Deep ocean + terminal/code editor hybrid
- **Mood**: Calm, focused, geeky, indie
- **Inspiration**: GitHub Dark theme, VS Code, deep sea bioluminescence

## Color Palette

```
Background:
- Primary:    #0d1117 (deep ocean black)
- Secondary:  #161b22 (elevated surfaces, cards)
- Tertiary:   #1f2428 (hover states)

Borders:
- Default:    #30363d
- Subtle:     #21262d

Text:
- Primary:    #c9d1d9 (main text)
- Secondary:  #8b949e (descriptions, meta)
- Muted:      #484f58 (comments, hints)
- Disabled:   #30363d

Accent:
- Blue:       #58a6ff (links, primary accent)
- Blue Hover: #79c0ff
- Green:      #7ee787 (success, terminal prompt)
- Green Alt:  #56d364 (buttons)
- Green Dark: #238636 (button background)
- Red:        #f85149 (destructive actions)
- Yellow:     #e3b341 (warnings)
```

## CSS Variables & Shadcn UI Integration

### Single Source of Truth
All colors are defined once in `@theme inline` and referenced by both custom and shadcn components:

**Ocean Theme Variables** (defined in `@theme inline`):
```css
--color-ocean-bg
--color-ocean-surface
--color-ocean-hover
--color-ocean-border
--color-ocean-border-subtle
--color-text-primary
--color-text-secondary
--color-text-muted
--color-text-disabled
--color-accent-blue
--color-accent-green
--color-accent-green-dark
--font-family-mono
```

**Shadcn Variables** (in `:root`, reference ocean variables):
```css
--background: var(--color-ocean-bg)
--foreground: var(--color-text-primary)
--primary: var(--color-accent-blue)
--accent: var(--color-accent-green-dark)
```

### Usage Guide

**For Custom Components** (Navigation, Hero, PostList, etc.):
```html
<div class="bg-ocean-bg text-text-primary border-ocean-border">
  <span class="text-accent-blue">Link</span>
</div>
```

**For Shadcn Components** (installed via CLI):
```bash
bunx shadcn@latest add button
```
Components automatically use ocean theme because shadcn variables reference ocean colors.

**Result**: One color change in `@theme inline` updates both custom and shadcn components! 🎨

## Typography

**Font Family**: `JetBrains Mono` (monospace for everything)

```
Sizes:
- Hero title:    clamp(2.5rem, 8vw, 5rem)
- Section title: 18px
- Body:          14px
- Small/Meta:    12-13px
- Tiny:          10-11px (keyboard hints)

Weights:
- Light:   300 (body, descriptions)
- Regular: 400 (titles, emphasis)
- Medium:  500 (buttons)
```

## Design Patterns

### Terminal Elements

```
Prompts & Paths:
- Path display:     ~/ocean-log
- Command style:    $ cd ./posts
- Arrow prompt:     → ls -la ./posts
- Comment style:    // a developer's journey

Code Comments (for section labels):
/**
 * @subscribe newsletter
 */
```

### Keyboard Hints

```html
<span class="kbd">p</span>  <!-- for shortcuts -->
```
Style: `border: 1px solid #30363d; padding: 1px 5px; border-radius: 3px; font-size: 10px; color: #484f58`

### Window Chrome (Terminal Cards)

```
┌─ ● ● ● ──────────────────────────────┐
│  Traffic light buttons (red/yellow/green)
│  Title in muted color
├──────────────────────────────────────┤
│  Content area
└──────────────────────────────────────┘

Button colors:
- Close:    #f85149
- Minimize: #e3b341  
- Maximize: #56d364
```

### Blinking Cursor

Title displays with blinking underscore: `ocean-log_`
Animation: opacity toggle every 530ms

## Components

### Navigation
- Left: `~/ocean-log` path style
- Right: lowercase links with keyboard hints
- Scroll behavior: blur backdrop + subtle border on scroll

### Post List Item
```
[01]  2025-01-15  Post title here  #tag
 ↑       ↑              ↑           ↑
blue   muted         primary     green
```

### Buttons
- Primary: Green background (#238636), white text
- Secondary: Dark background (#21262d), border (#30363d)
- Ghost: Transparent, border on hover

### Input Fields
- Background: #0d1117
- Border: #30363d → #8b949e on focus
- Arrow prompt (→) prefix inside

### Newsletter Box
- JSDoc style header comment
- Terminal-style input with prompt

## Animations

### Background Waves
- SVG wave paths with gradual animation
- Duration: 20-25s
- Opacity: 0.06 (very subtle)
- Colors: Blue (#58a6ff) and Green (#39d353) gradients

### Floating Particles
- Small circles (1-3px)
- Colors: Alternating blue/green
- Float animation: 18-30s duration
- Opacity: 0.1-0.4

### Micro-interactions
- Hover transitions: 0.15-0.2s ease
- Fade in up: translateY(20px) → 0
- Post hover: subtle background highlight

## Writing Style (UI Copy)

- All lowercase for navigation and labels
- Version numbers in footer: `v1.0.0`
- Social links as handles: `@github`
- Commands feel natural: `git log --all`
- Korean body text is fine, keep UI chrome in English

## File Reference

For detailed Tailwind class mappings, see: [./tailwind-classes.md](./tailwind-classes.md)