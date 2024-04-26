// App.js
import React from 'react';
import './App.css';

function App() {
  return (
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <MainContent />
        </div>
      </div>
  );
}

function Header() {
  return (
      <div className="header">
        <h1>Мій перший React додаток</h1>
      </div>
  );
}

function Sidebar() {
  return (
      <div className="sidebar">
        <h2>Бічна навігація</h2>
        <ul>
          <li>Пункт 1</li>
          <li>Пункт 2</li>
          <li>Пункт 3</li>
        </ul>
      </div>
  );
}

function MainContent() {
  return (
      <div className="main-content">
        <h2>Центральний контейнер</h2>
        <p>Контент</p>
      </div>
  );
}

export default App;
