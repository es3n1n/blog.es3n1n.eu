// @ts-check

import mdx from '@astrojs/mdx'
import { transformerNotationDiff } from '@shikijs/transformers'
import { defineConfig } from 'astro/config'

const SITE = 'https://blog.es3n1n.eu'
const SITE_HOST = new URL(SITE).hostname

/**
 * Marks external links in rendered markdown with target/rel at build time,
 * so it doesn't have to be done in the browser on every page load.
 */
function rehypeExternalLinks() {
  /** @param {any} node */
  const visit = node => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href
      if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
        try {
          if (new URL(href).hostname !== SITE_HOST) {
            node.properties.target = '_blank'
            node.properties.rel = ['noopener', 'noreferrer']
          }
        } catch {}
      }
    }
    if (Array.isArray(node.children)) {
      node.children.forEach(visit)
    }
  }
  /** @param {any} tree */
  return tree => visit(tree)
}

export default defineConfig({
  output: 'static',
  site: SITE,
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
    shikiConfig: {
      theme: 'css-variables',
      transformers: [transformerNotationDiff()],
    },
  },
})
