import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-second">
        <p className="beats-solo">Wyjątkowe prezenty</p>
        <h1>Wypakuj</h1>
        <h3>mnie</h3>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href='/produkty'>
            <button type="button">Nasze produkty</button>
          </Link>
          <div className="desc">
            <h5>personalizowane, kreatywne</h5>
            <p>na każdą okazję</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner