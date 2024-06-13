import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Main from './Main.js';

function Header() {
  return (
    <header class="header">
      <div class='header-container'>
        <div class="nav-left">
          <div class="div-btn">
            <a href="#" class="nav-btn">Зашквари</a>
          </div>
          <div class="div-btn">
            <a href="#" class="nav-btn">Особи</a>
          </div>
        </div>
        <nav class="nav-right">
          <a href="#" class="lang active">УКР</a>
          <a href="#" class="lang">EN</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2023 Сайт спротиву. Всі права захищені.</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Header />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      <Footer />
  </div>
)

reportWebVitals();