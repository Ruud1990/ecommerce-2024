import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { BsBagXFill  } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const canceled = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon-red">
          <BsBagXFill />
        </p>
        <h2>Coś poszło nie tak</h2>
        <p className="email-msg">Spróbuj ponownie</p>
        <p className="description">
          Jeśli masz jakiekolwiek pytania, napisz
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Kontynuuj zakupy
          </button>
        </Link>
      </div>
    </div>
  )
}

export default canceled