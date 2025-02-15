import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Wypakuj Mnie - personalizowane prezenty na każdą okazję</title>
        <meta name="description" content="Personalizowane upominki z drewna grawerowane i cięte laserem. Znajdź idealny prezent dla bliskiej osoby!" />
        <meta property="og:title" content="Wypakuj Mnie - Personalizowane Upominki" />
        <meta property="og:description" content="Unikalne prezenty z drewna na każdą okazję - chrzest, urodziny, ślub i wiele więcej." />
        <meta property="og:url" content="https://wypakuj-mnie.pl" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
