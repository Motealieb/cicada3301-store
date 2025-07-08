// App.jsx
import React, { useState } from 'react';
import products from './products';
import ProductCard from './ProductCard';
import Cart from './Cart';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🧢 Cicada3301 Store</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
          ))}
        </div>

        <Cart cartItems={cart} />
      </div>
    </div>
  );
}
