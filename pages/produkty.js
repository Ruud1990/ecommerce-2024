import React from 'react';
import { client } from '../lib/client';
import { Product } from '../components';

const ProductsPage = ({products}) => {
  console.log(products);
  return (
    <div>
      <div className="products-heading">
          <h2>Nasze Produkty</h2>
          <p>dzięki Tobie każdy z nich staje się wyjątkowy</p>
      </div>
      <div className="products-container">
              {products?.map((product) => <Product key={product._id} product={product} />)}
          </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);


  return {
    props: { products }
  }
}

export default ProductsPage;