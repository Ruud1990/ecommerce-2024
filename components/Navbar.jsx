import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import Image from 'next/image';
import logo from '../img/logo3.png';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { totalQuantities, showCart, setShowCart } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/" passHref>
        
          <Image className="logo" src={logo} alt="Logo Wypakuj Mnie"/>
        
      </Link>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
