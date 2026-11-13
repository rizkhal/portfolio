export type Project = {
  name: string
  year: string
  summary: string
  stack: string[]
  href: string
}

export const featured: Project[] = [
  {
    name: 'Pedoman',
    year: '2026',
    summary:
      'Indonesian legal research platform. The corpus from peraturan.go.id lives in Postgres and is served four ways: RAG chat, regulation genealogy, an admin console, and an MCP server.',
    stack: ['TypeScript', 'Hono', 'Postgres', 'Expo', 'MCP'],
    href: 'https://github.com/rizkhal/pedoman',
  },
  {
    name: 'OCEANGAZE',
    year: '2026',
    summary:
      'Live AIS and VMS vessel map for Indonesian waters. A Hono API with snapshot and detail caching sits in front of the feed, with a Leaflet map, filters, and detail cards on top.',
    stack: ['React 19', 'Hono', 'Leaflet', 'pnpm'],
    href: 'https://github.com/rizkhal/oceangaze',
  },
  {
    name: 'CoastDet',
    year: '2026',
    summary:
      'Coastal object detection from sub-meter satellite imagery: ships, docks, tanks, ponds, and construction, plus change detection between two epochs of the same tile.',
    stack: ['Python', 'YOLO OBB', 'FastAPI', 'GeoJSON'],
    href: 'https://github.com/rizkhal/tangkap',
  },
  {
    name: 'SIP-MCP',
    year: '2026',
    summary:
      'MCP server that puts Ministry of Marine Affairs data in front of an LLM: a live statistics API plus a 1,900-document regulation corpus indexed in SQLite FTS5.',
    stack: ['TypeScript', 'MCP', 'SQLite FTS5'],
    href: 'https://github.com/rizkhal/sip-mcp',
  },
  {
    name: 'Picly',
    year: '2026',
    summary:
      'Face search across local drives. InsightFace runs through ONNX Runtime inside an Electron app, so photos, embeddings, and clustering never leave the machine.',
    stack: ['Electron', 'ONNX Runtime', 'SQLite', 'React'],
    href: 'https://github.com/rizkhal/picly',
  },
  {
    name: 'Inertable',
    year: '2025',
    summary:
      'Headless datatable for Laravel and Inertia. Server-side sorting, filtering, and pagination with the markup left entirely to you. Published on Packagist.',
    stack: ['PHP', 'Laravel', 'Inertia', 'Vue'],
    href: 'https://github.com/rizkhal/inertable',
  },
]

export const more: Project[] = [
  {
    name: 'ReelFarm',
    year: '2026',
    summary: 'Self-hosted video segmentation and subtitle workflow: transcribe, split clips, review segments.',
    stack: ['TypeScript', 'Docker'],
    href: 'https://github.com/rizkhal/reelfarm',
  },
  {
    name: 'Freebufg',
    year: '2026',
    summary: 'OpenAI-compatible gateway in front of Freebuff, with a dashboard for sessions, logs, and keys.',
    stack: ['Hono', 'SQLite', 'React'],
    href: 'https://github.com/rizkhal/freebufg',
  },
  {
    name: 'Laporan',
    year: '2026',
    summary: 'Monthly engineering reports generated from commit history across many repositories.',
    stack: ['Hono', 'TypeScript', 'LLM'],
    href: 'https://github.com/rizkhal/laporan',
  },
  {
    name: 'PDF-MCP',
    year: '2026',
    summary: 'Generic PDF to SQLite FTS5 engine with an MCP server, reusable for any document corpus.',
    stack: ['Python', 'SQLite FTS5', 'MCP'],
    href: 'https://github.com/rizkhal/pdf-to-mcp',
  },
  {
    name: 'Cita',
    year: '2026',
    summary: 'SKD CPNS practice platform with per-question AI tutoring and a bilingual interface.',
    stack: ['TypeScript', 'React'],
    href: 'https://github.com/rizkhal/cat',
  },
  {
    name: 'Relay',
    year: '2026',
    summary: 'Self-hosted chat widget that routes visitor questions to your own MCP server through an LLM.',
    stack: ['TypeScript', 'MCP'],
    href: 'https://github.com/rizkhal/relay',
  },
  {
    name: 'Orbis',
    year: '2026',
    summary: 'Traffic simulator with a stealth HTTP engine and a real headless browser engine.',
    stack: ['TypeScript', 'undici', 'Playwright'],
    href: 'https://github.com/rizkhal/orbis',
  },
  {
    name: 'Stonks',
    year: '2026',
    summary: 'Crypto scalping research monorepo: deterministic backtests over Binance klines, stored and charted.',
    stack: ['TypeScript', 'SQLite', 'React'],
    href: 'https://github.com/rizkhal/stonks',
  },
  {
    name: 'IkanHub',
    year: '2026',
    summary: 'Fish-only placeholder image service, sized and seeded by URL.',
    stack: ['TypeScript'],
    href: 'https://github.com/rizkhal/ikanhub.space',
  },
  {
    name: 'Universe',
    year: '2026',
    summary: 'Portable dotfiles for macOS and Linux, with a safe-mode installer that backs up what it replaces.',
    stack: ['Lua', 'Shell'],
    href: 'https://github.com/rizkhal/universe',
  },
]

export const stackGroups: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Python', 'PHP', 'Lua', 'SQL', 'Bash'],
  },
  {
    title: 'Backend',
    items: ['Hono', 'Node.js', 'Bun', 'FastAPI', 'Postgres', 'SQLite', 'Prisma', 'Redis'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'Astro', 'Vue', 'Tailwind v4', 'Vite', 'Expo'],
  },
  {
    title: 'Data and ML',
    items: ['YOLO', 'ONNX Runtime', 'InsightFace', 'RAG', 'FTS5', 'Leaflet'],
  },
  {
    title: 'Infra',
    items: ['Docker', 'Coolify', 'Traefik', 'Cloudflare', 'GitHub Actions', 'Linux'],
  },
  {
    title: 'Protocols',
    items: ['MCP', 'OAuth 2.0', 'REST', 'WebRTC', 'WHEP'],
  },
]
