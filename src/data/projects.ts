export type Project = {
  name: string
  year: string
  summary: string
  stack: string[]
  href: string
}

export const featured: Project[] = [
  {
    name: 'Inertable',
    year: '2024',
    summary:
      'Headless datatable for Laravel and Inertia. Sorting, filtering, and pagination run server-side while the markup stays entirely yours. Published on Packagist, tested in CI.',
    stack: ['PHP', 'Laravel', 'Inertia', 'Vue'],
    href: 'https://github.com/rizkhal/inertable',
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
    name: 'AniFlix',
    year: '2023',
    summary:
      'Anime streaming desktop app built with Electron, Vite, and Vue 3. Featured on Product Hunt, with a separate API service behind it.',
    stack: ['Electron', 'Vue 3', 'Vite'],
    href: 'https://github.com/rizkhal/aniflix',
  },
  {
    name: 'Laporan',
    year: '2026',
    summary:
      'Monthly engineering reports generated from commit history across many repositories. Collects commits, analyses them through an LLM, and renders three report styles.',
    stack: ['Hono', 'Drizzle', 'SQLite', 'React'],
    href: 'https://github.com/rizkhal/laporan',
  },
  {
    name: 'Ayuwind',
    year: '2022',
    summary:
      'Multi-theme admin dashboard template built on Alpine.js and Tailwind. No build step, no framework runtime, just markup that ships.',
    stack: ['Alpine.js', 'Tailwind', 'Nunjucks'],
    href: 'https://github.com/rizkhal/ayuwind',
  },
  {
    name: 'IkanHub',
    year: '2026',
    summary:
      'Fish-only placeholder image service, sized and seeded by URL. A Hono API with a React front end, running live at ikanhub.space.',
    stack: ['Hono', 'React', 'Vite'],
    href: 'https://github.com/rizkhal/ikanhub.space',
  },
]

export const more: Project[] = [
  {
    name: 'Universe',
    year: '2026',
    summary: 'Portable dotfiles for macOS and Linux, with a safe-mode installer that backs up what it replaces.',
    stack: ['Lua', 'Shell'],
    href: 'https://github.com/rizkhal/universe',
  },
  {
    name: 'Vue3 Offline First',
    year: '2023',
    summary: 'Todo app that keeps working with the network off, syncing through RxDB when it comes back.',
    stack: ['Vue 3', 'RxDB'],
    href: 'https://github.com/rizkhal/vue3-offline-first',
  },
  {
    name: 'Moora',
    year: '2022',
    summary: 'Multi-objective optimisation implemented from the paper, wrapped in a Laravel interface.',
    stack: ['PHP', 'Laravel'],
    href: 'https://github.com/rizkhal/moora',
  },
  {
    name: 'Alamat',
    year: '2023',
    summary: 'Resolves an Indonesian national ID number into a registered address through a small JSON API.',
    stack: ['TypeScript'],
    href: 'https://github.com/rizkhal/alamat',
  },
  {
    name: 'Geocut',
    year: '2024',
    summary: 'Cuts a polygon down to size on a map and hands back the coordinates, without a GIS install.',
    stack: ['Vue', 'Nuxt'],
    href: 'https://github.com/rizkhal/geocut',
  },
  {
    name: 'InerUI',
    year: '2023',
    summary: 'Accessible Vue component set built around developer experience rather than visual opinion.',
    stack: ['TypeScript', 'Vue'],
    href: 'https://github.com/rizkhal/inerui',
  },
  {
    name: 'Inertable Vue',
    year: '2023',
    summary: 'The Vue side of Inertable, packaged so a table can be dropped into an existing Inertia page.',
    stack: ['Vue'],
    href: 'https://github.com/rizkhal/inertable-vue',
  },
  {
    name: 'Yuq Ngaji',
    year: '2021',
    summary: 'Al-Quran reader for the browser with per-verse navigation and no build tooling.',
    stack: ['Vue'],
    href: 'https://github.com/rizkhal/yuq-ngaji',
  },
  {
    name: 'AniFlix API',
    year: '2023',
    summary: 'The service layer behind AniFlix: catalogue, episodes, and stream resolution.',
    stack: ['JavaScript'],
    href: 'https://github.com/rizkhal/aniflix-api',
  },
  {
    name: 'Fire Geolocation',
    year: '2020',
    summary: 'NodeMCU and a flame sensor reporting position over the network. Hardware, not a web app.',
    stack: ['JavaScript', 'NodeMCU'],
    href: 'https://github.com/rizkhal/fire-geolocation',
  },
]

export const stackGroups: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Python', 'PHP', 'Lua', 'SQL', 'Bash'],
  },
  {
    title: 'Backend',
    items: ['Hono', 'Node.js', 'Laravel', 'Postgres', 'SQLite', 'Drizzle', 'Prisma'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vue', 'Astro', 'Tailwind', 'Vite', 'Alpine.js'],
  },
  {
    title: 'Desktop and data',
    items: ['Electron', 'ONNX Runtime', 'RxDB', 'SQLite FTS5'],
  },
  {
    title: 'Infra',
    items: ['Docker', 'Coolify', 'Traefik', 'Cloudflare', 'GitHub Actions', 'Linux'],
  },
  {
    title: 'Protocols',
    items: ['REST', 'OAuth 2.0', 'WebSocket'],
  },
]
