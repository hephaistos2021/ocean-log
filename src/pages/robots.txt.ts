// robots.txt endpoint
import type { APIRoute } from 'astro'

const robotsTxt = `
# ocean-log robots.txt
# https://ocean-log.dev/robots.txt

User-agent: *
Allow: /

# Disallow admin or private areas (if any)
# Disallow: /admin/

# Sitemap location
Sitemap: https://ocean-log.dev/sitemap-index.xml

# Crawl-delay (optional, adjust based on server capacity)
# Crawl-delay: 10
`.trim()

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400', // Cache for 1 day
        },
    })
}
