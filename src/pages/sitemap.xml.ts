import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    const base = 'https://hotelesvilladeleyva.com';
    const pages = ['', 'about', 'blog']; // update as you add pages
    const urls = pages
     .map((p) => `<url><loc>${base}/${p}</loc><changefreq>weekly</changefreq></url>`)
     .join('');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
+<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
    return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
