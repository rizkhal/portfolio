import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const URL = process.env.URL || 'http://127.0.0.1:4321/'
const OUT = process.env.OUT || '/tmp/shots'
mkdirSync(OUT, { recursive: true })

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const browser = await chromium.launch({ channel: 'chrome' })
const report = []

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(String(e)))

  await page.goto(URL, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(1600)

  const metrics = await page.evaluate(() => {
    const q = (s) => document.querySelector(s)
    const box = (s) => {
      const e = q(s)
      if (!e) return null
      const b = e.getBoundingClientRect()
      return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height) }
    }
    const h1 = q('h1')
    const cs = getComputedStyle(h1)
    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      scrollW: document.documentElement.scrollWidth,
      docH: document.documentElement.scrollHeight,
      hero: box('#top'),
      h1: { size: cs.fontSize, lines: Math.round(h1.getBoundingClientRect().height / parseFloat(cs.lineHeight)) },
      door: box('.door'),
      sun: box('.scene__sun'),
      card: box('.float-card'),
      cta: box('#top a[href="#work"]'),
      fonts: {
        fraunces: document.fonts.check('16px "Fraunces Variable"'),
        geist: document.fonts.check('16px "Geist Variable"'),
      },
    }
  })

  const shot = async (name) => {
    await page.screenshot({ path: `${OUT}/${vp.name}-${name}.png`, animations: 'disabled', timeout: 60000 })
  }

  await shot('hero')

  for (const [name, sel] of [
    ['work', '#work'],
    ['specimen', '.float-card + *'],
    ['stack', '#stack'],
    ['about', '#about'],
    ['contact', '#contact'],
  ]) {
    const ok = await page.evaluate((s) => {
      const el = document.querySelector(s)
      if (!el) return false
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70)
      return true
    }, sel)
    if (!ok) continue
    await page.waitForTimeout(1100)
    await shot(name)
  }

  const revealed = await page.evaluate(() => ({
    total: document.querySelectorAll('.reveal').length,
    shown: document.querySelectorAll('.reveal.is-in').length,
  }))

  report.push({ vp: vp.name, ...metrics, revealed, errors })
  await ctx.close()
}

await browser.close()
console.log(JSON.stringify(report, null, 2))
