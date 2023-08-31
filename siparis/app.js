import React from 'react';
import './App.css';
import Menu from './Menu';

const App = () => {
  const menuItems = [
    { name: 'Hamburger', description: 'Lezzetli bir hamburger.' },
    { name: 'Pizza', description: 'Çeşitli malzemelerle yapılan pizza.' },
    // Diğer menü öğelerini buraya ekleyebilirsiniz
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yemek Sipariş Uygulaması</h1>
      </header>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default App;
