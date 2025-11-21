/** Minimal Next.js config with i18n and image domains */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
  },
};