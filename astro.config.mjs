// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

export default defineConfig({
  site: 'https://wusp-jarocin.pl/',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    jopSoftwarecookieconsent({
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },
      categories: {
        necessary: {
          readOnly: true
        },
        analytics: {}
      },
      language: {
        default: 'pl',
        translations: {
          pl: {
            consentModal: {
              title: "Używamy plików cookie",
              description: "Ta strona wykorzystuje pliki cookie w celu zapewnienia najlepszego doświadczenia użytkownika oraz analizy ruchu.",
              acceptAllBtn: 'Zaakceptuj wszystkie',
              acceptNecessaryBtn: 'Tylko niezbędne',
              showPreferencesBtn: 'Zarządzaj preferencjami'
            },
            preferencesModal: {
              title: 'Centrum preferencji zgody',
              acceptAllBtn: 'Zaakceptuj wszystkie',
              acceptNecessaryBtn: 'Tylko niezbędne',
              savePreferencesBtn: 'Zapisz preferencje',
              sections: [
                {
                  title: 'Niezbędne pliki cookie',
                  description: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analityczne pliki cookie',
                  description: 'Te pliki cookie pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony.',
                  linkedCategory: 'analytics'
                }
              ]
            }
          }
        }
      }
    }),
  ],
  output: "server",
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
});