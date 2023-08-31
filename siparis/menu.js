import React, { useState } from 'react';

const Menu = ({ menuItems }) => {
  const [orders, setOrders] = useState([]);

  const handleOrder = (itemName) => {
    setOrders([...orders, itemName]);
  };

  return (
    <div className="menu">
      <h2>Yemek Menüsü</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            {item.name} - {item.description}{' '}
            <button onClick={() => handleOrder(item.name)}>Sipariş Ver</button>
          </li>
        ))}
      </ul>
      <h3>Siparişler:</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
