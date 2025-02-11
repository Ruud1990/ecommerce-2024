import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta name="description" content="Personalizowane upominki z drewna grawerowane i cięte laserem. Znajdź idealny prezent dla bliskiej osoby!" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Wypakuj Mnie - Personalizowane Upominki" />
        <meta property="og:description" content="Unikalne prezenty z drewna na każdą okazję - chrzest, urodziny, ślub i wiele więcej." />
        <meta property="og:url" content="https://wypakuj-mnie.pl" />
        <meta property="og:type" content="website" />
        
        {/* Preloading ważnych zasobów */}
        <link rel="preload" href="/path-to-important-image.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
