// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
    <img
      src={product.image}
      alt={product.name}
      className="w-40 h-40 object-contain mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
    <p className="text-gray-600">{product.price} جنيه</p>
    <button
      onClick={() => addToCart(product)}
      className="mt-2 bg-black text-white px-4 py-1 rounded-xl hover:bg-gray-800"
    >
      أضف إلى السلة
    </button>
  </div>
);

export default ProductCard;
