import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://nexelab.com',
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  }), compress(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});