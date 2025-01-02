import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 Wypakuj Mnie Wszelkie Prawa Zastrzeżone</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <Link href="/privacy">RODO</Link>
      <Link href="/rules">Regulamin</Link>
    </div>
  )
}

export default Footer