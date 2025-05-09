import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://wusp-jarocin.pl/',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  output: "server",
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
});
