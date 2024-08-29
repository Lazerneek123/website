import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Main from './Main.js';
import Investigation from './Investigation.js';
import Investigations from './Investigations.js';
import Persons from './Persons.js';
import Person from './Person.js';
import './css/index.css';

function Header() {
  return (
    <header class="header">
      <div class='header-container'>
        <div class="nav-left">
          <div class="div-btn">
            <Link to="/investigations" class="nav-btn">Зашквари</Link>
          </div>
          <div class="div-btn">
            <Link to="/persons" class="nav-btn">Особи</Link>
          </div>
        </div>
        <div class="div-btn-back">
          <Link to="/" class="div-back"></Link>
        </div>
        <nav class="nav-right">
          <a href="#" className="lang active">УКР</a>
          <a href="#" className="lang">EN</a>
        </nav>
      </div>
    </header>

  );
}

function Footer() {
  return (
    <footer class='footer'>
      <p class='footerText'>© 2024 Сайт спротиву. Всі права захищені.</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/investigation" component={Investigation} />
          <Route exact path="/investigations" component={Investigations} />
          <Route exact path="/persons" component={Persons} />
          <Route exact path="/person" component={Person} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  </div>
)

reportWebVitals();