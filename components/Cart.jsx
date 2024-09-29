import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  const [isRodoChecked, setIsRodoChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRodoChange = (e) => {
    setIsRodoChecked(e.target.checked);
  };

  const handleCheckout = async () => {
    if (!isRodoChecked) {
      alert('Musisz zaakceptować RODO, aby kontynuować.');
      return;
    }

    setLoading(true);

    const stripe = await getStripe();

    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });

      if (response.status === 500) {
        alert('Wystąpił błąd serwera. Spróbuj ponownie później.');
        setLoading(false);
        return;
      }

      const data = await response.json();

      toast.loading('Przekierowanie...');

      const result = await stripe.redirectToCheckout({ sessionId: data.id });

      if (result.error) {
        alert(result.error.message);
        setLoading(false);
      }
    } catch (error) {
      alert('Wystąpił błąd podczas realizacji płatności. Spróbuj ponownie później.');
      setLoading(false);
    }
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Koszyk</span>
          <span className="cart-num-items">({totalQuantities} szt.)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Twój koszyk jest pusty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Kontynuuj zakupy
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img src={urlFor(item?.image[0])} className="cart-product-image" />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>zł{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() => toggleCartItemQuantity(item._id, 'dec')}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">
                          {item.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() => toggleCartItemQuantity(item._id, 'inc')}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Podsumowanie:</h3>
              <h3>zł{totalPrice}</h3>
            </div>
            <div className="btn-container">
              <label>
                <input
                  type="checkbox"
                  checked={isRodoChecked}
                  onChange={handleRodoChange}
                />
                Akceptuję{' '}
                <span
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  <Link href="/privacy">RODO</Link>
                </span>
              </label>
                <div className="rodo-info">
                </div>
              <button
                type="button"
                className="btn"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? 'Ładowanie...' : 'Zapłać'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
