/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wypakuj-mnie.pl', // Zmień na swój adres URL
  generateRobotsTxt: true, // Generuje także plik robots.txt
  sitemapSize: 5000, // Maksymalna liczba linków na mapę witryny
  exclude: ['/admin', '/secret'], // Wyklucz strony, których nie chcesz indeksować
};
