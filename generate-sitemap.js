// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Your site's base URL
const hostname = 'https://www.yoursite.com';

// Routes from your main.jsx
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/packages', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/solutions', changefreq: 'monthly', priority: 0.8 },
  { url: '/solutions/pos-product', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-and-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.5 }
];

const stream = new SitemapStream({ hostname });
streamToPromise(stream).then(() => console.log('✅ Sitemap generated!'));

stream.pipe(createWriteStream('./public/sitemap.xml'));
links.forEach(link => stream.write(link));
stream.end();
