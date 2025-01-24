import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://heroprotagonist.is-a.dev/',
    base: 'tony-talleres',
    integrations: [
        tailwind({ configFile: './tailwind.config.mjs' }),
    ],
})
