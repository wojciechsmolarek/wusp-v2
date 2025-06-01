import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
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
        }
      },
      categories: {
        necessary: {
          readOnly: true
        },
        analytics: {
          services: {
            ga4: {
              label: '<a href="https://policies.google.com/privacy" target="_blank">Google Analytics</a>',
              onAccept: () => {
                try {
                  if (typeof window.gtag !== 'undefined') {
                    window.gtag('consent', 'update', {
                      'analytics_storage': 'granted',
                      'ad_storage': 'granted',
                      'functionality_storage': 'granted',
                      'personalization_storage': 'granted'
                    });
                    console.log('GA4 consent granted');
                    // Wymuszamy wysłanie page_view po akceptacji
                    window.gtag('event', 'page_view', {
                      'page_title': document.title,
                      'page_location': window.location.href,
                      'page_referrer': document.referrer
                    });
                  } else {
                    console.error('gtag nie jest zdefiniowany podczas akceptacji');
                  }
                } catch (error) {
                  console.error('Błąd podczas aktualizacji consent:', error);
                }
              },
              onReject: () => {
                try {
                  if (typeof window.gtag !== 'undefined') {
                    window.gtag('consent', 'update', {
                      'analytics_storage': 'denied',
                      'ad_storage': 'denied',
                      'functionality_storage': 'denied',
                      'personalization_storage': 'denied'
                    });
                    console.log('GA4 consent denied');
                  } else {
                    console.error('gtag nie jest zdefiniowany podczas odrzucenia');
                  }
                } catch (error) {
                  console.error('Błąd podczas aktualizacji consent:', error);
                }
              },
              cookies: [
                { name: /^_ga/ },
                { name: '_gid' },
                { name: '_gat' }
              ]
            }
          }
        }
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
                  title: 'Niezbędne pliki cookie <span class="pm__badge">Zawsze włączone</span>',
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