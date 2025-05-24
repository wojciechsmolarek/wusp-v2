import * as CookieConsent from 'vanilla-cookieconsent';

function isBot() {
  const userAgent = navigator.userAgent.toLowerCase();
  const botPatterns = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot'
  ];
  
  return botPatterns.some(pattern => userAgent.includes(pattern)) ||
         /bot|crawl|spider|slurp/i.test(userAgent);
}

if (!isBot()) {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: 'box inline',
        position: 'bottom right'
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
              console.log('Google Analytics włączone');
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            },
            onReject: () => {
              console.log('Google Analytics wyłączone');
              gtag('consent', 'update', {
                'analytics_storage': 'denied'
              });
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
  });
}