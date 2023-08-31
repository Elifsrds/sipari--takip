// src/App.js
import React from 'react';
import './App.css';

const orders = [
  { name: 'Hamburger', description: 'Lezzetli bir hamburger.' },
  { name: 'Pizza', description: 'Çeşitli malzemelerle yapılan pizza.' },
  // Diğer siparişleri buraya ekleyebilirsiniz
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Siparişler</h1>
      </header>
      <section className="orders">
        {orders.map((order, index) => (
          <div key={index} className="order">
            <h2>{order.name}</h2>
            <p>{order.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
