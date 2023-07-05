import React from 'react';
import ProductCard from './ProductCard';

function Listing( { items }) {
  return (
    <>
      {items.map((el) => el.state === 'active' ? <ProductCard item={ el } key={el.listing_id}/> : <div key={el.listing_id}></div>)}
    </>
  )
}

export default Listing
