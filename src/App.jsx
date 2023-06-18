import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from './app/features/shoppingCard/shoppingCardSlice';

export default function App(){
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title: 'LAURA MERCIER TRANSLUCENT LOOSE SETTING POWDER 29G',
        price: 16213.68,
        about:
          'With a blend of organic powders and oils, our talc-free SPF 20 formula nourishes and softens skin, while taking down shine thanks to a skin-texture',
        sku: '34667',
        categories: ['Accessories'],
      })
    );
  };

  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        title: 'LAURA MERCIER TRANSLUCENT LOOSE SETTING POWDER 29G',
        price: 16213.68,
        about:
          'With a blend of organic powders and oils, our talc-free SPF 20 formula nourishes and softens skin, while taking down shine thanks to a skin-texture',
        sku: '34667',
        categories: ['Accessories'],
      })
    );
  };

  return (
    <div>
      <h2>LAURA MERCIER TRANSLUCENT LOOSE SETTING POWDER 29G</h2>
      <p>Price: 16 213,68 Armenian drams</p>
      <p>
        About: With a blend of organic powders and oils, our talc-free SPF 20 formula nourishes and softens skin, while taking down shine thanks to a
        skin-texture
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      <button>Share This</button>
      <p>SKU: 34667</p>
      <p>Categories: Accessories</p>
    </div>
  );
};

