import React from 'react';
import {
  Routes, Route, NavLink, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <nav>
        <p className="logo">
          <Link to="/">Math Magician</Link>
        </p>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/calculator" className={({ isActive }) => (isActive ? 'active' : '')}>
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/quote" className={({ isActive }) => (isActive ? 'active' : '')}>
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
