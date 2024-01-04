import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';
import party from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
    i18n: {
        defaultLocale: "en",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    },
    integrations: [
        tailwind(),
        party(),
        sitemap(),
        mdx(),
        alpine()
    ],
    prefetch: true,
    site: "https://logically.cc"
});