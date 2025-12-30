# Tailwind CSS Class Reference for ocean-log

## Custom Colors (Tailwind v4 - defined in src/styles/global.css)

```css
@theme inline {
  /* Ocean theme colors */
  --color-ocean-bg: #0d1117;
  --color-ocean-surface: #161b22;
  --color-ocean-hover: #1f2428;
  --color-ocean-border: #30363d;
  --color-ocean-border-subtle: #21262d;

  /* Text colors */
  --color-text-primary: #c9d1d9;
  --color-text-secondary: #8b949e;
  --color-text-muted: #484f58;
  --color-text-disabled: #30363d;

  /* Accent colors */
  --color-accent-blue: #58a6ff;
  --color-accent-blue-hover: #79c0ff;
  --color-accent-green: #7ee787;
  --color-accent-green-alt: #56d364;
  --color-accent-green-dark: #238636;
  --color-accent-red: #f85149;
  --color-accent-yellow: #e3b341;

  /* Font families */
  --font-family-mono: 'JetBrains Mono', monospace;
}
```

**Usage in classes:**
- `bg-ocean-bg`, `bg-ocean-surface`, `bg-ocean-hover`
- `border-ocean-border`, `border-ocean-border-subtle`
- `text-text-primary`, `text-text-secondary`, `text-text-muted`
- `text-accent-blue`, `bg-accent-green-dark`, etc.
- `font-mono`

## Component Class Patterns

### Layout
```
Container:      max-w-[700px] mx-auto px-10
Section:        py-16 relative z-10
Full screen:    min-h-screen flex flex-col justify-center items-center
```

### Typography
```
Hero:           text-[clamp(2.5rem,8vw,5rem)] font-normal tracking-tight
Section title:  text-lg font-normal
Body:           text-sm font-light
Meta:           text-xs text-text-muted
Comment:        text-xs text-text-muted  // prefix with //
```

### Navigation
```
Nav container:  fixed top-0 inset-x-0 px-10 py-5 flex justify-between items-center z-50
Nav scrolled:   bg-ocean-bg/90 backdrop-blur-md border-b border-ocean-border-subtle
Nav link:       text-text-secondary text-sm hover:text-text-primary transition-colors
Kbd hint:       text-[10px] text-text-muted border border-ocean-border rounded px-1.5 py-0.5
```

### Cards (Terminal Window)
```
Card:           bg-ocean-surface border border-ocean-border rounded-md overflow-hidden
Card header:    px-4 py-3 border-b border-ocean-border flex items-center gap-2
Traffic light:  w-3 h-3 rounded-full
Card body:      py-2
```

### Buttons
```
Primary:        bg-accent-green-dark hover:bg-accent-green-alt text-white px-4 py-2.5 text-sm rounded-md
Secondary:      bg-ocean-surface border border-ocean-border hover:border-text-secondary text-text-primary px-5 py-2.5 text-sm rounded-md
```

### Form Elements
```
Input wrapper:  flex items-center bg-ocean-bg border border-ocean-border rounded-md px-3
Input:          flex-1 bg-transparent border-none py-2.5 px-2 text-sm text-text-primary outline-none
Input prompt:   text-text-muted text-sm  // → character
```

### Post List
```
Post row:       flex items-center px-4 py-2.5 hover:bg-ocean-hover transition-colors
Post number:    text-xs text-accent-blue min-w-[24px]
Post date:      text-xs text-text-muted min-w-[100px] ml-4
Post title:     text-sm text-text-primary flex-1 ml-4
Post tag:       text-[11px] text-accent-green ml-4
```

### Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-15px) translateX(8px); }
  50% { transform: translateY(-8px) translateX(-8px); }
  75% { transform: translateY(-20px) translateX(4px); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

## Responsive Breakpoints

```
Mobile-first approach:
- Default: Mobile
- md (768px): Tablet
- lg (1024px): Desktop

Hero title responsive: text-[clamp(2.5rem,8vw,5rem)]
Container padding: px-6 md:px-10
```