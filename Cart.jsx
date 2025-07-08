// Cart.jsx
import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-xl font-bold mb-2 text-gray-800">🛒 سلة المشتريات</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">لا توجد منتجات مضافة</p>
      ) : (
        <ul className="space-y-2 mb-2">
          {cartItems.map((item, idx) => (
            <li key={idx} className="text-gray-700">
              {item.name} - {item.price} جنيه
            </li>
          ))}
        </ul>
      )}
      <hr className="my-2" />
      <p className="font-bold text-gray-800">الإجمالي: {total} جنيه</p>
    </div>
  );
};

export default Cart;
