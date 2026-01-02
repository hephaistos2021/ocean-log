// Dynamic OG Image Generation
// This endpoint generates a PNG Open Graph image
import type { APIRoute } from 'astro'
import { Resvg } from '@resvg/resvg-js'

export const GET: APIRoute = async () => {
    const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1117;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#161b22;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0d1117;stop-opacity:1" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#30363d" stroke-width="1" opacity="0.3"/>
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="1200" height="630" fill="url(#oceanGradient)"/>
      <rect width="1200" height="630" fill="url(#grid)"/>

      <!-- Decorative elements -->
      <circle cx="100" cy="100" r="40" fill="#58a6ff" opacity="0.1"/>
      <circle cx="1100" cy="530" r="60" fill="#7ee787" opacity="0.1"/>
      <circle cx="200" cy="500" r="30" fill="#58a6ff" opacity="0.15"/>
      <circle cx="1000" cy="150" r="45" fill="#7ee787" opacity="0.15"/>

      <!-- Wave decoration -->
      <path d="M0 400 Q 300 350, 600 400 T 1200 400 L 1200 630 L 0 630 Z"
            fill="#161b22" opacity="0.3"/>

      <!-- Terminal window decoration -->
      <rect x="80" y="120" width="1040" height="420" rx="8"
            fill="#161b22" stroke="#30363d" stroke-width="2"/>

      <!-- Terminal header -->
      <rect x="80" y="120" width="1040" height="40" rx="8"
            fill="#1f2428" stroke="#30363d" stroke-width="2"/>
      <circle cx="110" cy="140" r="6" fill="#f85149"/>
      <circle cx="135" cy="140" r="6" fill="#e3b341"/>
      <circle cx="160" cy="140" r="6" fill="#7ee787"/>

      <!-- Main content -->
      <text x="600" y="280" font-family="monospace"
            font-size="72" font-weight="bold" fill="#c9d1d9" text-anchor="middle">
        ocean-log
      </text>

      <text x="600" y="340" font-family="monospace"
            font-size="28" fill="#8b949e" text-anchor="middle">
        깊은 바다처럼, 깊은 생각을
      </text>

      <!-- Command prompt -->
      <text x="140" y="440" font-family="monospace"
            font-size="20" fill="#7ee787">
        <tspan fill="#58a6ff">$</tspan> cat ~/thoughts
      </text>

      <rect x="135" y="455" width="15" height="3" fill="#7ee787"/>

      <!-- Footer -->
      <text x="600" y="500" font-family="monospace"
            font-size="18" fill="#484f58" text-anchor="middle">
        Developer Blog • TypeScript • Astro • Web Performance
      </text>
    </svg>
  `

    // Convert SVG to PNG using resvg
    const resvg = new Resvg(svg, {
        fitTo: {
            mode: 'width',
            value: 1200,
        },
    })

    const pngData = resvg.render()
    const pngBuffer = pngData.asPng()

    return new Response(pngBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    })
}
