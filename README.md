# rizkal.wtf

Personal site. Astro 5 static build, Tailwind v4, Geist and Geist Mono self-hosted.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Deploy

Docker image builds the site with Node 22 and serves `dist/` from nginx.

```bash
docker build -t rizkal-wtf .
docker run --rm -p 8080:80 rizkal-wtf
```

Production runs on Coolify behind Traefik at https://rizkal.wtf.

## Content

All project copy lives in `src/data/projects.ts`. Sections are Astro components in
`src/components/`.
