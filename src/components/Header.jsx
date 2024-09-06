// components/Header.jsx
import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
